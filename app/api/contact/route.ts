import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendServerEnquiryEmail } from "@/lib/serverMailer";
import { TARGET_EMAIL } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod schema
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, subject, message } = result.data;

    // Dispatch email to medomashealthcare@gmail.com
    await sendServerEnquiryEmail({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: `Thank you for contacting Medomas Healthcare. Your enquiry has been routed to ${TARGET_EMAIL}. Our desk will respond promptly.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Medomas Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred while processing your enquiry. Please reach our desk directly at medomashealthcare@gmail.com or call +91 9645222639.",
      },
      { status: 500 }
    );
  }
}
