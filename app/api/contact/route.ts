import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, phoneno ,  email, message } = await req.json();
    
    if (!fullName ||!phoneno ||!email ||!message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
    }
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "rokaraaz@gmail.com", // Your Gmail
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName} \n  Phone no : ${phoneno}\nEmail: ${email}\n\nMessage:\n${message} `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
