"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.enum(["web-dev", "web-app", "mobile", "cloud", "ai", "other"]),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitContact(data: ContactFormData) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  // Simulate delay
  await new Promise((r) => setTimeout(r, 1000));
  console.log("Contact form submission:", parsed.data);

  return {
    success: true,
    message: "Thank you! We'll be in touch within 24 hours.",
  };
}
