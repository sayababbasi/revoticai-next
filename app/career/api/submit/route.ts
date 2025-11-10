// // // // Force Node.js runtime (Nodemailer won't work on Edge)
// // // export const runtime = "nodejs";

// // // import { NextResponse } from "next/server";
// // // import nodemailer from "nodemailer";
// // // import fs from "fs";
// // // import path from "path";
// // // import os from "os";

// // // export async function POST(req: Request) {
// // //   try {
// // //     // Parse FormData
// // //     const formData = await req.formData();

// // //     const name = formData.get("name") as string;
// // //     const email = formData.get("email") as string;
// // //     const phone = formData.get("phone") as string;
// // //     const jobTitle = formData.get("jobTitle") as string;
// // //     const message = formData.get("message") as string;
// // //     const file = formData.get("resume") as File | null;

// // //     if (!name || !email || !phone || !jobTitle) {
// // //       return NextResponse.json(
// // //         { success: false, error: "Missing required fields." },
// // //         { status: 400 }
// // //       );
// // //     }

// // //     // Handle file upload (if provided)
// // //     let attachment: any = null;
// // //     if (file) {
// // //       const arrayBuffer = await file.arrayBuffer();
// // //       const buffer = Buffer.from(arrayBuffer);

// // //       const tempPath = path.join(os.tmpdir(), file.name);
// // //       fs.writeFileSync(tempPath, buffer);

// // //       attachment = {
// // //         filename: file.name,
// // //         path: tempPath,
// // //       };
// // //     }

// // //     // Configure Nodemailer (use env vars in production)
// // //     const transporter = nodemailer.createTransport({
// // //       service: "gmail",
// // //       auth: {
// // //         user: "EMAIL_USER",
// // //         pass: "EMAIL_PASS", //  Use App Password or env var
// // //       },
// // //     });

// // //     // Email Content
// // //     const mailOptions = {
// // //       from: `"Revotic AI Careers" <management.revoticai@gmail.com>`,
// // //       to: "management.revoticai@gmail.com",
// // //       subject: `New Career Application | ${name} - ${jobTitle}`,
// // //       html: `
// // //         <h2>New Job Application Received</h2>
// // //         <p><strong>Name:</strong> ${name}</p>
// // //         <p><strong>Email:</strong> ${email}</p>
// // //         <p><strong>Phone:</strong> ${phone}</p>
// // //         <p><strong>Position Applied For:</strong> ${jobTitle}</p>
// // //         <p><strong>Message:</strong><br>${message || "No additional message provided."}</p>
// // //       `,
// // //       attachments: attachment ? [attachment] : [],
// // //     };

// // //     await transporter.sendMail(mailOptions);

// // //     // Cleanup temporary file
// // //     if (attachment) fs.unlinkSync(attachment.path);

// // //     return NextResponse.json({
// // //       success: true,
// // //       message: "Application submitted successfully!",
// // //     });
// // //   } catch (error: any) {
// // //     console.error("CAREER FORM ERROR:", error);
// // //     return NextResponse.json(
// // //       { success: false, error: error.message },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }


// // import { NextResponse } from "next/server";
// // import nodemailer from "nodemailer";

// // export async function POST(req: Request) {
// //   try {
// //     const formData = await req.formData();

// //     const name = formData.get("name") as string;
// //     const email = formData.get("email") as string;
// //     const phone = formData.get("phone") as string;
// //     const company = formData.get("company") as string;
// //     const services = formData.get("services") as string;
// //     const message = formData.get("message") as string;
// //     const resume = formData.get("resume") as File | null;

// //     if (!name || !email || !phone || !message) {
// //       return NextResponse.json(
// //         { success: false, error: "Missing required fields." },
// //         { status: 400 }
// //       );
// //     }

// //     const transporter = nodemailer.createTransport({
// //       service: "gmail",
// //       auth: {
// //         user: process.env.EMAIL_USER,
// //         pass: process.env.EMAIL_CAREER_PASS
// //       }
// //     });

// //     const html = `
// //       <h2>New Career Application</h2>
// //       <p><strong>Name:</strong> ${name}</p>
// //       <p><strong>Email:</strong> ${email}</p>
// //       <p><strong>Phone:</strong> ${phone}</p>
// //       <p><strong>Company:</strong> ${company || "N/A"}</p>
// //       <p><strong>Services:</strong> ${services || "N/A"}</p>
// //       <p><strong>Message:</strong><br>${message}</p>
// //     `;

// //     const mailOptions: any = {
// //       from: `"RevoticAI Careers" <${process.env.SMTP_USER}>`,
// //       to: process.env.SMTP_TO || process.env.SMTP_USER,
// //       subject: `New Career Application from ${name}`,
// //       html,
// //     };

// //     if (resume) {
// //       const buffer = Buffer.from(await resume.arrayBuffer());
// //       mailOptions.attachments = [
// //         { filename: resume.name, content: buffer },
// //       ];
// //     }

// //     await transporter.sendMail(mailOptions);
// //     return NextResponse.json({ success: true, message: "Application sent successfully!" });
// //   } catch (error: any) {
// //     console.error("FORM SUBMIT ERROR:", error);
// //     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
// //   }
// // }


// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ success: false, error: "Method not allowed" });
//   }

//   const { name, email, phone, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, error: "Missing required fields" });
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_CAREER_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: "management.revoticai@gmail.com",  // Must be defined
//     subject: `Career Form Submission: ${name}`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Phone: ${phone || "N/A"}
//       Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     return res.status(500).json({ success: false, error: error.message });
//   }
// }


// // app/career/api/submit/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   try {
//     // Parse JSON body
//     const body = await req.json();
//     const { name, email, phone, message } = body as {
//       name: string;
//       email: string;
//       phone?: string;
//       message: string;
//     };

//     // Validate required fields
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Create Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_CAREER_PASS, // Make sure this is your App Password
//       },
//     });

//     // Prepare email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "management.revoticai@gmail.com", // Career submissions go here
//       subject: `Career Form Submission: ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone || "N/A"}
// Message: ${message}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Return success
//     return NextResponse.json({ success: true });
//   } catch (error: unknown) {
//     console.error("Email sending failed:", error);

//     // Return proper error message
//     return NextResponse.json(
//       { success: false, error: error instanceof Error ? error.message : "Unknown error" },
//       { status: 500 }
//     );
//   }
// }


