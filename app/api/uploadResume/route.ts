// // // app/api/uploadResume/route.ts
// // import { NextRequest, NextResponse } from "next/server";

// // const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
// // const REPO = process.env.GITHUB_REPO!;
// // const BRANCH = process.env.GITHUB_BRANCH!;

// // export async function POST(req: NextRequest) {
// //   try {
// //     const { fileName, fileContent } = await req.json();

// //     const response = await fetch(`https://api.github.com/repos/${REPO}/contents/${fileName}`, {
// //       method: "PUT",
// //       headers: {
// //         Authorization: `token ${GITHUB_TOKEN}`,
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         message: `Upload resume: ${fileName}`,
// //         content: fileContent,
// //         branch: BRANCH,
// //       }),
// //     });

// //     const data = await response.json();

// //     if (data.content && data.content.download_url) {
// //       return NextResponse.json({ url: data.content.download_url });
// //     } else {
// //       return NextResponse.json({ error: "Failed to upload to GitHub", data }, { status: 500 });
// //     }
// //   } catch (err: any) {
// //     return NextResponse.json({ error: err.message }, { status: 500 });
// //   }
// // }


import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse form data
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS || "{}");
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    // Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });
    const drive = google.drive({ version: "v3", auth });

    // File metadata
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileMetadata = {
      name: file.name,
      parents: folderId ? [folderId] : [],
    };

    // Upload
    const media = { mimeType: file.type, body: Buffer.from(buffer) };
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media,
      fields: "id, name, webViewLink, webContentLink",
    });

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully!",
      file: response.data,
    });
  } catch (err: any) {
    console.error("Google Drive upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload file", details: err.message },
      { status: 500 }
    );
  }
}
