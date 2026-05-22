"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  Zap,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
} from "@/lib/animated-icons";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { FADE_UP, SCALE_IN } from "@/lib/animations";
import { cn } from "@/lib/utils";

// ── EmailJS config (values come from .env.local) ─────────────
const EJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EJS_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

// ── Zod schema ────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"),
  company: z.string().optional(),
  phone: z
    .string()
    .regex(/^[+]?[\d\s\-().]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.enum(["web-dev", "web-app", "mobile", "cloud", "ai", "other"]),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Static data ───────────────────────────────────────────────
const SERVICE_OPTIONS = [
  { value: "web-dev", label: "Website Development" },
  { value: "web-app", label: "Web App Development" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "cloud", label: "Cloud & Backend Solutions" },
  { value: "ai", label: "AI Chatbots & Assistants" },
  { value: "other", label: "Other" },
] as const;

const inputClass = (hasError: boolean) =>
  cn(
    "w-full rounded-xl border bg-secondary px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1",
    hasError
      ? "border-rose-500 focus:border-rose-400 focus:ring-rose-400"
      : "border-border focus:border-red-400 focus:ring-red-400",
  );

export function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "web-dev" },
  });

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      setSendError(null);

      const serviceLabel =
        SERVICE_OPTIONS.find((o) => o.value === data.service)?.label ??
        data.service;

      try {
        await emailjs.send(
          EJS_SERVICE,
          EJS_TEMPLATE,
          {
            user_name: data.name,
            user_email: data.email,
            user_company: data.company?.trim() || "—",
            user_contact: data.phone?.trim() || "—",
            user_service: serviceLabel,
            message: data.message,
            reply_to: data.email,
          },
          { publicKey: EJS_KEY },
        );

        reset();
        setShowSuccess(true);
      } catch (err) {
        const msg =
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again or email us directly.";
        setSendError(msg);
      }
    },
    [reset],
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-x section-y relative"
    >
      {/* Background accents */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-screen-xl gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: info */}
        <AnimateIn variants={FADE_UP}>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-4xl font-bold"
          >
            Start the Conversation
          </h2>
          <p className="mt-4 text-muted-foreground">
            We respond to all inquiries within 24 hours. Tell us about your
            project — the more detail, the better.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-red-400" />
              <a
                href="mailto:tensaiforge@gmail.com"
                className="text-foreground transition-colors hover:text-red-400"
              >
                tensaiforge@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-red-400" />
              <div className="flex flex-col gap-0.5 text-muted-foreground">
                <a
                  href="tel:+917892008290"
                  className="transition-colors hover:text-foreground"
                >
                  +91-7892008290
                </a>
                <a
                  href="tel:+918799756909"
                  className="transition-colors hover:text-foreground"
                >
                  +91-8799756909
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-red-400" />
              <span className="text-muted-foreground">
                Mon–Fri, 9am–6pm IST
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={18} className="text-red-400" />
              <span className="text-muted-foreground">
                Response within 24 hours, guaranteed
              </span>
            </div>
          </div>
        </AnimateIn>

        {/* Right: form */}
        <AnimateIn variants={FADE_UP} delay={0.1}>
          {showSuccess ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={SCALE_IN}
              className="flex h-full flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/50 p-12 text-center backdrop-blur-sm"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                <CheckCircle2 className="text-emerald-400" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
              <p className="mt-3 text-muted-foreground">
                Thank you! We&apos;ll be in touch within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="btn-ghost mt-6 text-sm"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass(!!errors.name)}
                  {...register("name")}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    role="alert"
                    className="mt-1.5 text-xs text-rose-400"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass(!!errors.email)}
                  {...register("email")}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1.5 text-xs text-rose-400"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Name + Email row on wider screens */}
              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  className={inputClass(false)}
                  {...register("company")}
                />
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Contact Number
                </label>
                <div className="relative">
                  <Phone
                    size={15}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 555 000 0000"
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={cn(inputClass(!!errors.phone), "pl-9")}
                    {...register("phone")}
                  />
                </div>
                {errors.phone && (
                  <p
                    id="phone-error"
                    role="alert"
                    className="mt-1.5 text-xs text-rose-400"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Service Needed <span aria-hidden="true">*</span>
                </label>
                <select
                  id="service"
                  aria-required="true"
                  aria-describedby={
                    errors.service ? "service-error" : undefined
                  }
                  className={inputClass(!!errors.service)}
                  {...register("service")}
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p
                    id="service-error"
                    role="alert"
                    className="mt-1.5 text-xs text-rose-400"
                  >
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Project Details <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  aria-required="true"
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={cn(inputClass(!!errors.message), "resize-none")}
                  {...register("message")}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-1.5 text-xs text-rose-400"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Send error banner */}
              {sendError && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-400"
                >
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{sendError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-4 text-base"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : null}
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
