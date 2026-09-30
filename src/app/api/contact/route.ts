import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, interest, subject, message, formType } = body;

    // Basic Validation
    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const isSecure = process.env.SMTP_SECURE !== "false";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || user;

    if (!user || !pass || pass === "replace_with_your_password") {
      console.warn("SMTP credentials not configured in environment variables.");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please set SMTP_USER and SMTP_PASS in .env.local",
        },
        { status: 500 }
      );
    }

    // Create reusable transporter object using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: isSecure, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const inquiryType = formType || interest || subject || "Website Contact Form";
    const emailSubject = `[New Inquiry] ${inquiryType} - ${fullName}`;

    // Clean HTML email template
    const htmlContent = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #0F172A, #0284C7); padding: 20px; border-radius: 8px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 22px; letter-spacing: 0.5px;">Future Yatra™</h2>
          <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.85;">New Website Inquiry Received</p>
        </div>

        <div style="padding: 24px 0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 35%;">Category / Type:</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 600;">${inquiryType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Full Name:</td>
              <td style="padding: 10px 0; color: #0F172A;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
              <td style="padding: 10px 0; color: #0284C7;"><a href="mailto:${email}" style="color: #0284C7; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
              <td style="padding: 10px 0; color: #0F172A;">${phone || "Not provided"}</td>
            </tr>
          </table>

          ${
            message
              ? `
            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0284C7; border-radius: 4px;">
              <p style="margin: 0 0 6px; font-weight: bold; color: #475569; font-size: 13px;">Message / Details:</p>
              <p style="margin: 0; color: #1e293b; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          `
              : ""
          }
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
          Sent from Future Yatra™ Website Contact API &bull; Received at ${new Date().toLocaleString()}
        </div>
      </div>
    `;

    // Send email via Hostinger SMTP
    await transporter.sendMail({
      from: `"Future Yatra™ Portal" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text: `New Inquiry from ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nInterest: ${inquiryType}\nMessage: ${message || "N/A"}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: any) {
    console.error("Error sending email via SMTP:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to send email. Please check server logs.",
      },
      { status: 500 }
    );
  }
}
