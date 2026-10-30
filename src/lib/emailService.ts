export const TARGET_EMAIL = "medomashealthcare@gmail.com";

/**
 * Generates a pre-filled mailto URL for submitting a CV with auto-generated introduction text tailored to the specific role.
 */
export function getCareerCvMailto(roleTitle: string = "General Application"): string {
  const isMedRep =
    roleTitle.toLowerCase().includes("medical") ||
    roleTitle.toLowerCase().includes("rep");
  const isSupplyChain =
    roleTitle.toLowerCase().includes("supply") ||
    roleTitle.toLowerCase().includes("logistics");

  const subject = `Job Application: ${roleTitle} - [Candidate Name]`;
  let body = "";

  if (isMedRep) {
    body = `Dear Medomas Healthcare Hiring Team,

I am writing to express my strong interest in the Medical Representative & Field Sales position at Medomas Healthcare Pvt. Ltd.

I am enthusiastic about representing Medomas's pharmaceutical portfolio and building ethical, trust-based relationships with physicians, healthcare professionals, clinics, and pharmacies across Kerala and regional markets.

Please find attached my Curriculum Vitae (CV) / Resume for your review.

Candidate Details:
• Full Name: [Please enter your full name]
• Contact Phone: [Please enter your phone number]
• Email Address: [Please enter your email]
• Current Location / District: [Your Location, Kerala]
• Educational Qualification: [B.Pharm / B.Sc / Other]
• Professional Experience: [Fresher / 1-3 Years / 3+ Years]

Thank you for your time and consideration. I look forward to an opportunity to speak with you.

Sincerely,
[Your Name]`;
  } else if (isSupplyChain) {
    body = `Dear Medomas Healthcare Hiring Team,

I am writing to express my interest in the Supply Chain & Distribution Logistics position at Medomas Healthcare Pvt. Ltd.

I am eager to contribute to Medomas's distribution network, supporting institutional supply consistency, warehouse operations, inventory control, and cold-chain distribution across partner states and healthcare facilities.

Please find attached my Curriculum Vitae (CV) / Resume for your review.

Candidate Details:
• Full Name: [Please enter your full name]
• Contact Phone: [Please enter your phone number]
• Email Address: [Please enter your email]
• Current Location / District: [Your Location]
• Educational Qualification: [Degree / Diploma]
• Logistics Experience: [Years / Fresher]

Thank you for considering my application. I look forward to hearing from you.

Sincerely,
[Your Name]`;
  } else {
    body = `Dear Medomas Healthcare Hiring Team,

I am writing to submit my Curriculum Vitae (CV) for career opportunities at Medomas Healthcare Pvt. Ltd.

I am keen to contribute to Medomas's mission of delivering quality-driven, reliable healthcare solutions. Please find attached my CV / Resume for your review.

Candidate Details:
• Full Name: [Please enter your full name]
• Contact Phone: [Please enter your phone number]
• Email Address: [Please enter your email]
• Area of Interest: [Field Sales / Logistics / Healthcare Operations / Other]
• Current Location: [Your Location]

Thank you for your consideration.

Sincerely,
[Your Name]`;
  }

  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * Generates a pre-filled mailto URL for general contact form enquiries.
 */
export function getContactEnquiryMailto(data: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): string {
  const mailSubject = `Website Enquiry: ${data.subject || "General Inquiry"} - ${data.fullName}`;
  const mailBody = `Dear Medomas Healthcare Team,

You have received a new professional enquiry through the official website contact form.

Enquiry Details:
• From: ${data.fullName}
• Email: ${data.email}
• Telephone: ${data.phone}
• Subject: ${data.subject}

Message Details:
${data.message}

--
Sent via Medomas Healthcare Corporate Website
Designated Recipient: ${TARGET_EMAIL}`;

  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(mailBody)}`;
}
