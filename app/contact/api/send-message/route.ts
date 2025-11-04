import { NextResponse } from "next/server";

// This is a placeholder API route.
// You will need to add your Prisma and Resend/Nodemailer logic here.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // --- 1. (TODO) VALIDATE DATA (with Zod or manually) ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // --- 2. (TODO) SAVE TO DATABASE (Prisma) ---
    // Example (once Prisma is set up):
    // const dbResponse = await prisma.contactMessage.create({
    //   data: { name, email, company, message },
    // });
    console.log("Saving to database (placeholder):", {
      name,
      email,
      company,
      message,
    });

    // --- 3. (TODO) SEND EMAIL NOTIFICATION (Resend/Nodemailer) ---
    // Example (once Resend is set up):
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@revoticai.com',
    //   subject: `New Lead from ${name}`,
    //   html: `<p>You received a new message from ${name} (${email}) at ${company}:</p><p>${message}</p>`,
    // });
    console.log("Sending email notification (placeholder)");

    // --- 4. RETURN SUCCESS ---
    // Simulate a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // If everything is successful:
    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
