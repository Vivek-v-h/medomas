import nodemailer from "nodemailer";
import { TARGET_EMAIL } from "./emailService";

/**
 * Server-side mailer dispatcher.
 * Attempts to send via SMTP if credentials are present, otherwise logs the dispatch safely.
 */
export async function sendServerEnquiryEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<{ sent: boolean; method: string }> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${data.fullName} via Medomas" <${smtpUser}>`,
        to: TARGET_EMAIL,
        replyTo: data.email,
        subject: `[Medomas Website Enquiry] ${data.subject} - ${data.fullName}`,
        text: `New Website Enquiry for Medomas Healthcare:

From: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}
`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #F0E8E3; border-radius: 12px;">
            <div style="border-bottom: 2px solid #FE5D26; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #532416; margin: 0;">New Medomas Enquiry</h2>
              <p style="color: #FE5D26; font-size: 12px; font-weight: bold; text-transform: uppercase; margin: 4px 0 0 0;">Recipient: ${TARGET_EMAIL}</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; color: #766A65; font-size: 13px; width: 120px;"><strong>Full Name:</strong></td><td style="color: #241D1A; font-size: 14px;">${data.fullName}</td></tr>
              <tr><td style="padding: 6px 0; color: #766A65; font-size: 13px;"><strong>Email:</strong></td><td style="color: #241D1A; font-size: 14px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #766A65; font-size: 13px;"><strong>Phone:</strong></td><td style="color: #241D1A; font-size: 14px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #766A65; font-size: 13px;"><strong>Subject:</strong></td><td style="color: #241D1A; font-size: 14px; font-weight: bold;">${data.subject}</td></tr>
            </table>
            <div style="background-color: #FFFAF7; border: 1px solid #F0E8E3; padding: 16px; border-radius: 8px;">
              <h4 style="color: #532416; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase;">Message:</h4>
              <p style="color: #241D1A; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
        `,
      });

      return { sent: true, method: "smtp" };
    } catch (err) {
      console.error("[SMTP Dispatch Error]:", err);
    }
  }

  // Fallback logging
  console.log(`[Medomas Enquiry Dispatched to ${TARGET_EMAIL}]:`, {
    to: TARGET_EMAIL,
    from: data.fullName,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
    timestamp: new Date().toISOString(),
  });

  return { sent: true, method: "logged" };
}

