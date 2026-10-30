"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import {
  getContactEnquiryMailto,
  TARGET_EMAIL,
} from "@/lib/emailService";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillSubject = searchParams.get("subject") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: prefillSubject,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    const mailtoLink = getContactEnquiryMailto(data);
    setLastMailtoUrl(mailtoLink);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitStatus("success");
        setServerMessage(resData.message);
        reset();

        // Automatically launch mailto to guarantee delivery to medomashealthcare@gmail.com
        if (typeof window !== "undefined") {
          window.open(mailtoLink, '_self');
        }
      } else {
        setSubmitStatus("error");
        setServerMessage(resData.message || "Failed to submit enquiry.");
      }
    } catch {
      // In case server is offline, still trigger mailto dispatch
      setSubmitStatus("success");
      setServerMessage(
        `Enquiry prepared for ${TARGET_EMAIL}. Your mail client should open with your message details.`
      );
      if (typeof window !== "undefined") {
        window.open(mailtoLink, '_self');
      }
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="rounded-3xl bg-white border border-[#F0E8E3] p-8 sm:p-10 shadow-lg">
      
      

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold text-[#532416] font-[var(--font-manrope)]">
          Send Us an Enquiry
        </h3>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFFAF7] border border-[#F0E8E3] text-[#766A65]">
          
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[#766A65]">
        Please fill in your details below for product queries, distribution partnerships, or professional messages. All messages are forwarded directly to {TARGET_EMAIL}.
      </p>

      {/* Success Notification */}
      {submitStatus === "success" && (
        <div className="mt-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Enquiry sent!</strong>
              <p className="mt-1 text-xs text-emerald-800">{serverMessage}</p>
            </div>
          </div>
          {lastMailtoUrl && (
            <div className="pt-3 border-t border-emerald-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs text-emerald-700">
                Didn&apos;t open in your email app automatically?
              </span>
              <a
                href={lastMailtoUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all self-start sm:self-auto"
              >
                <span>Send via Email App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      )}

      {/* Error Notification */}
      {submitStatus === "error" && (
        <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Submission Error</strong>
            <p className="mt-1">{serverMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#532416] mb-1.5">
            Full Name <span className="text-[#DF0000]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Dr. / Mr. / Ms. Full Name"
            {...register("fullName")}
            className="w-full px-4 py-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] text-sm text-[#241D1A] placeholder-[#766A65] focus:outline-none focus:border-[#FE5D26] focus:bg-white transition-all"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-[#DF0000]">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#532416] mb-1.5">
              Email Address <span className="text-[#DF0000]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@organization.com"
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] text-sm text-[#241D1A] placeholder-[#766A65] focus:outline-none focus:border-[#FE5D26] focus:bg-white transition-all"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-[#DF0000]">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#532416] mb-1.5">
              Phone Number <span className="text-[#DF0000]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 9876543210"
              {...register("phone")}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] text-sm text-[#241D1A] placeholder-[#766A65] focus:outline-none focus:border-[#FE5D26] focus:bg-white transition-all"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-[#DF0000]">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#532416] mb-1.5">
            Subject <span className="text-[#DF0000]">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Institutional Distribution / Product Inquiry"
            {...register("subject")}
            className="w-full px-4 py-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] text-sm text-[#241D1A] placeholder-[#766A65] focus:outline-none focus:border-[#FE5D26] focus:bg-white transition-all"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-[#DF0000]">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#532416] mb-1.5">
            Message Details <span className="text-[#DF0000]">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Describe your inquiry, institutional requirements, or collaboration proposal..."
            {...register("message")}
            className="w-full px-4 py-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] text-sm text-[#241D1A] placeholder-[#766A65] focus:outline-none focus:border-[#FE5D26] focus:bg-white transition-all"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-[#DF0000]">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Routing to {TARGET_EMAIL}...</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Submit</span>
                <Send className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
