import nodemailer from "nodemailer";

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "web@futureyatra.com",
      pass: "Kushasho@369",
    },
  });

  try {
    console.log("Verifying Hostinger SMTP connection...");
    await transporter.verify();
    console.log("✅ SUCCESS: Hostinger SMTP connection and login verified!");

    console.log("Sending test email to info@futureyatra.com...");
    const info = await transporter.sendMail({
      from: '"Future Yatra Portal" <web@futureyatra.com>',
      to: "info@futureyatra.com",
      subject: "Test Inquiry - Future Yatra Portal Setup",
      text: "This is a test inquiry to verify that Hostinger SMTP is successfully connected to the website!",
      html: "<h3>✅ Hostinger SMTP is Connected!</h3><p>Your website contact form is ready to deliver real student inquiries.</p>",
    });

    console.log("✅ Email sent successfully! MessageId:", info.messageId);
  } catch (error) {
    console.error("❌ SMTP Error:", error);
  }
}

testEmail();
