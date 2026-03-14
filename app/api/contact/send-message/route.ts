

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      company,
      services,
      message
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "management.revoticai@gmail.com",
        pass: "svvsdsngsnliclzp", // your gmail app password
      },
    });

    const mailOptions = {
      from: `"RevoticAI Website Contact" <management.revoticai@gmail.com>`,
      to: "management.revoticai@gmail.com",
      subject: `New Contact Form | ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Services:</strong> ${Array.isArray(services) ? services.join(", ") : services}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error: any) {
    console.error("NODEMAILER ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}


