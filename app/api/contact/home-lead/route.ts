// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Website Home Lead" <${process.env.EMAIL_USER}>`,
//       to: "management.revoticai@gmail.com",
//       subject: `New Home Lead from ${name}`,
//       html: `
//         <h2>New Home Lead Form Submission</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//     });

//     return NextResponse.json({ ok: true });
//   } catch (e: any) {
//     console.log("ERROR HOME LEAD:", e);
//     return NextResponse.json({ error: "Email send failed" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    if(!name || !email || !phone){
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"RevoticAI Home Lead" <${process.env.EMAIL_USER}>`,
      to: "management.revoticai@gmail.com",
      subject: `New Home Lead from ${name}`,
      html: `
        <h2>New Discount Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.log("HOME LEAD EMAIL ERROR →", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
