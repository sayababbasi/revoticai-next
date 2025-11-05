// // // // // // // // import { NextResponse } from "next/server";

// // // // // // // // // This is a placeholder API route.
// // // // // // // // // You will need to add your Prisma and Resend/Nodemailer logic here.

// // // // // // // // export async function POST(request: Request) {
// // // // // // // //   try {
// // // // // // // //     const body = await request.json();
// // // // // // // //     const { name, email, company, message } = body;

// // // // // // // //     // --- 1. (TODO) VALIDATE DATA (with Zod or manually) ---
// // // // // // // //     if (!name || !email || !message) {
// // // // // // // //       return NextResponse.json(
// // // // // // // //         { error: "Missing required fields" },
// // // // // // // //         { status: 400 }
// // // // // // // //       );
// // // // // // // //     }

// // // // // // // //     // --- 2. (TODO) SAVE TO DATABASE (Prisma) ---
// // // // // // // //     // Example (once Prisma is set up):
// // // // // // // //     // const dbResponse = await prisma.contactMessage.create({
// // // // // // // //     //   data: { name, email, company, message },
// // // // // // // //     // });
// // // // // // // //     console.log("Saving to database (placeholder):", {
// // // // // // // //       name,
// // // // // // // //       email,
// // // // // // // //       company,
// // // // // // // //       message,
// // // // // // // //     });

// // // // // // // //     // --- 3. (TODO) SEND EMAIL NOTIFICATION (Resend/Nodemailer) ---
// // // // // // // //     // Example (once Resend is set up):
// // // // // // // //     // await resend.emails.send({
// // // // // // // //     //   from: 'onboarding@resend.dev',
// // // // // // // //     //   to: 'your-email@revoticai.com',
// // // // // // // //     //   subject: `New Lead from ${name}`,
// // // // // // // //     //   html: `<p>You received a new message from ${name} (${email}) at ${company}:</p><p>${message}</p>`,
// // // // // // // //     // });
// // // // // // // //     console.log("Sending email notification (placeholder)");

// // // // // // // //     // --- 4. RETURN SUCCESS ---
// // // // // // // //     // Simulate a short delay
// // // // // // // //     await new Promise(resolve => setTimeout(resolve, 1000));

// // // // // // // //     // If everything is successful:
// // // // // // // //     return NextResponse.json({ success: true }, { status: 200 });
    
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("API Error:", error);
// // // // // // // //     return NextResponse.json(
// // // // // // // //       { error: "Internal Server Error" },
// // // // // // // //       { status: 500 }
// // // // // // // //     );
// // // // // // // //   }
// // // // // // // // }


// // // // // // // import { NextResponse } from "next/server";
// // // // // // // import emailjs from "@emailjs/nodejs";

// // // // // // // export async function POST(req: Request) {
// // // // // // //   try {
// // // // // // //     const body = await req.json();

// // // // // // //     const { name, email, phone, company, services, message } = body;

// // // // // // //     const emailData = {
// // // // // // //       name,
// // // // // // //       email,
// // // // // // //       phone,
// // // // // // //       company,
// // // // // // //       services: services?.join(", "), // convert array → string
// // // // // // //       message,
// // // // // // //     };

// // // // // // //     const result = await emailjs.send(
// // // // // // //       "service_24hekgn",          // service id
// // // // // // //       "template_0u73edp",         // template id
// // // // // // //       emailData,
// // // // // // //       {
// // // // // // //         publicKey: "IF4WbCZuXMDeKvn5O" 

// // // // // // //       }
// // // // // // //     );

// // // // // // //     return NextResponse.json(
// // // // // // //       { ok: true, status: "sent", result },
// // // // // // //       { status: 200 }
// // // // // // //     );
// // // // // // //   } catch (e: any) {
// // // // // // //     console.log("EMAIL ERROR:", e);
// // // // // // //     return NextResponse.json(
// // // // // // //       { ok: false, error: e?.message || "Error sending message" },
// // // // // // //       { status: 500 }
// // // // // // //     );
// // // // // // //   }
// // // // // // // }

// // // // // // import { NextResponse } from "next/server";

// // // // // // export async function POST(request: Request) {
// // // // // //   try {
// // // // // //     const body = await request.json();
// // // // // //     const { name, email, phone, company, services, message } = body;

// // // // // //     const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
// // // // // //       method: "POST",
// // // // // //       headers: { "Content-Type": "application/json" },
// // // // // //       body: JSON.stringify({
// // // // // //         service_id: "service_24hekgn",
// // // // // //         template_id: "template_0u73edp",
// // // // // //         user_id: "pT4SCy8mKgQbIS09Y",          // PUBLIC KEY
// // // // // //         accessToken: "_e15gapbqRtGbVAtUTHT3K",  // << REQUIRED for server
// // // // // //         template_params: {
// // // // // //           name,
// // // // // //           email,
// // // // // //           phone,
// // // // // //           company,
// // // // // //           services: JSON.stringify(services),
// // // // // //           message
// // // // // //         }
// // // // // //       })
// // // // // //     });

// // // // // //     if (!emailRes.ok) {
// // // // // //       const errText = await emailRes.text();
// // // // // //       return NextResponse.json(
// // // // // //         { ok: false, error: errText },
// // // // // //         { status: 500 }
// // // // // //       );
// // // // // //     }

// // // // // //     return NextResponse.json({ ok: true }, { status: 200 });

// // // // // //   } catch (err: any) {
// // // // // //     return NextResponse.json(
// // // // // //       { ok: false, error: err?.message || "Server Error" },
// // // // // //       { status: 500 }
// // // // // //     );
// // // // // //   }
// // // // // // }


// // // // // import { NextResponse } from "next/server";

// // // // // export async function POST(request: Request) {
// // // // //   try {
// // // // //     const body = await request.json();
// // // // //     const { name, email, phone, company, services, message } = body;

// // // // //     const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({
// // // // //         service_id: "service_24hekgn",
// // // // //         template_id: "template_0u73edp",
// // // // //         user_id: "pT4SCy8mKgQbIS09Y",     //  public key (correct name is user_id)
// // // // //         accessToken: "_e15gapbqRtGbVAtUTHT3K", //  private token (server key)
// // // // //         template_params: {
// // // // //           name,
// // // // //           email,
// // // // //           phone,
// // // // //           company,
// // // // //           services: Array.isArray(services) ? services.join(", ") : services,
// // // // //           message,
// // // // //         },
// // // // //       }),
// // // // //     });

// // // // //     if (!emailRes.ok) {
// // // // //       const errText = await emailRes.text();
// // // // //       return NextResponse.json({ ok: false, error: errText }, { status: 500 });
// // // // //     }

// // // // //     return NextResponse.json({ ok: true }, { status: 200 });
// // // // //   } catch (err: any) {
// // // // //     return NextResponse.json({ ok: false, error: err?.message || "Server Error" }, { status: 500 });
// // // // //   }
// // // // // }

// // // // // console.log("API HIT ✅");


// // // // import { NextResponse } from "next/server";

// // // // export async function POST(request: Request) {
// // // //   try {
// // // //     const body = await request.json();
// // // //     const { name, email, phone, company, services, message } = body;

// // // //     const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({
// // // //         service_id: "service_24hekgn",
// // // //         template_id: "template_0u73edp",
// // // //         public_key: "IF4WbCZuXMDeKvn5O",  // <-- correct
// // // //         template_params: {
// // // //           name,
// // // //           email,
// // // //           phone,
// // // //           company,
// // // //           services: Array.isArray(services) ? services.join(", ") : services,
// // // //           message,
// // // //         },
// // // //       }),
// // // //     });

// // // //     if (!emailRes.ok) {
// // // //       const errText = await emailRes.text();
// // // //       return NextResponse.json({ ok: false, error: errText }, { status: 500 });
// // // //     }

// // // //     return NextResponse.json({ ok: true }, { status: 200 });
// // // //   } catch (err: any) {
// // // //     return NextResponse.json({ ok: false, error: err?.message || "Server Error" }, { status: 500 });
// // // //   }
// // // // }

// // // // console.log("API HIT ✅");

// // // // app/api/contact/send-message/route.ts
// // // export const runtime = "nodejs";

// // // import { NextResponse } from "next/server";

// // // type FormDataType = {
// // //   name?: string;
// // //   email?: string;
// // //   phone?: string;
// // //   company?: string;
// // //   services?: string[] | string;
// // //   message?: string;
// // // };

// // // function normalizeServices(s: string[] | string | undefined) {
// // //   if (!s) return "";
// // //   if (Array.isArray(s)) return s.join(", ");
// // //   return String(s);
// // // }

// // // export async function POST(request: Request) {
// // //   try {
// // //     const body = (await request.json()) as FormDataType;

// // //     if (!body.name || !body.email || !body.message) {
// // //       return NextResponse.json(
// // //         { ok: false, error: "Missing required fields (name, email, message)" },
// // //         { status: 400 }
// // //       );
// // //     }

// // //     const payload = {
// // //       service_id: "service_24hekgn",
// // //       template_id: "template_0u73edp",
// // //       template_params: {
// // //         name: body.name,
// // //         email: body.email,
// // //         phone: body.phone ?? "",
// // //         company: body.company ?? "",
// // //         services: normalizeServices(body.services),
// // //         message: body.message,
// // //       },
// // //       public_key: "IF4WbCZuXMDeKvn5O",
// // //       user_id: "IF4WbCZuXMDeKvn5O", // some EmailJS versions require this
// // //       accessToken: "e15gapbqRtGbVAtUTHT3K",
// // //     };

// // //     const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify(payload),
// // //     });

// // //     const txt = await res.text();

// // //     if (!res.ok) {
// // //       console.error("EmailJS Error:", txt);
// // //       return NextResponse.json(
// // //         { ok: false, error: "Email sending failed", detail: txt },
// // //         { status: 500 }
// // //       );
// // //     }

// // //     return NextResponse.json({ ok: true, result: txt });
// // //   } catch (err: any) {
// // //     console.error("Route Error:", err);
// // //     return NextResponse.json({ ok: false, error: err?.message ?? "Server Error" }, { status: 500 });
// // //   }
// // // }


// // // app/api/contact/send-message/route.ts
// // export const runtime = "nodejs";

// // import { NextResponse } from "next/server";

// // type FormDataType = {
// //   name?: string;
// //   email?: string;
// //   phone?: string;
// //   company?: string;
// //   services?: string[] | string;
// //   message?: string;
// // };

// // function normalizeServices(s: string[] | string | undefined) {
// //   if (!s) return "";
// //   if (Array.isArray(s)) return s.join(", ");
// //   return String(s);
// // }

// // export async function POST(request: Request) {
// //   try {
// //     const body = (await request.json()) as FormDataType;

// //     if (!body.name || !body.email || !body.message) {
// //       return NextResponse.json(
// //         { ok: false, error: "Missing required fields (name, email, message)" },
// //         { status: 400 }
// //       );
// //     }

// //     const payload = {
// //       service_id: "service_24hekgn",
// //       // template_id: "template_0u73edp",
// //       template_id: "template_jea4yog",
// //       user_id: "IF4WbCZuXMDeKvn5O", // PUBLIC KEY ONLY
// //       template_params: {
// //         name: body.name,
// //         email: body.email,
// //         phone: body.phone ?? "",
// //         company: body.company ?? "",
// //         services: normalizeServices(body.services),
// //         message: body.message,
// //       },
// //     };

// //     const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(payload),
// //     });

// //     const txt = await res.text();

// //     if (!res.ok) {
// //       console.error("EmailJS Error:", txt);
// //       return NextResponse.json(
// //         { ok: false, error: "Email sending failed", detail: txt },
// //         { status: 500 }
// //       );
// //     }

// //     return NextResponse.json({ ok: true, result: txt });
// //   } catch (err: any) {
// //     console.error("Route Error:", err);
// //     return NextResponse.json(
// //       { ok: false, error: err?.message ?? "Server Error" },
// //       { status: 500 }
// //     );
// //   }
// // }

// export const runtime = "nodejs";

// import { NextResponse } from "next/server";

// type FormDataType = {
//   name?: string;
//   email?: string;
//   phone?: string;
//   company?: string;
//   services?: string[] | string;
//   message?: string;
// };

// function normalizeServices(s: string[] | string | undefined) {
//   if (!s) return "";
//   if (Array.isArray(s)) return s.join(", ");
//   return String(s);
// }

// export async function POST(request: Request) {
//   try {
//     const body = (await request.json()) as FormDataType;

//     if (!body.name || !body.email || !body.message) {
//       return NextResponse.json(
//         { ok: false, error: "Missing required fields (name, email, message)" },
//         { status: 400 }
//       );
//     }

//     // emailjs payload
//     const payload = {
//       service_id: "service_24hekgn",          // must match your service ID
//       template_id: "template_jea4yog",        // your Contact Us template ID
//       user_id: "IF4WbCZuXMDeKvn5O",           // your PUBLIC KEY
//       template_params: {
//         name: body.name,
//         email: body.email,
//         phone: body.phone ?? "",
//         company: body.company ?? "",
//         services: normalizeServices(body.services),
//         message: body.message,
//       },
//     };

//     const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const txt = await res.text();

//     if (!res.ok) {
//       console.error("EmailJS Error:", txt);
//       return NextResponse.json(
//         { ok: false, error: "Email sending failed", detail: txt },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ ok: true, msg: "email sent", raw: txt });
//   } catch (err: any) {
//     console.error("Route Error:", err);
//     return NextResponse.json(
//       { ok: false, error: err?.message ?? "Server Error" },
//       { status: 500 }
//     );
//   }
// }


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


