

// app/career/api/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const body = await req.json();
    const { name, email, phone, message } = body as {
      name: string;
      email: string;
      phone?: string;
      message: string;
    };

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_CAREER_PASS, // Make sure this is your App Password
      },
    });

    // Prepare email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "management.revoticai@gmail.com", // Career submissions go here
      subject: `Career Form Submission: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Email sending failed:", error);

    // Return proper error message
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
