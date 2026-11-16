import { z } from "zod";
import { contactInfo } from "@/lib/contact";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(1, "Message is required").max(5000),
  website: z.string().optional().default(""),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type SendContactResult = "sent" | "needs_activation";

export async function sendContactEmail(
  input: ContactFormInput,
): Promise<SendContactResult> {
  if (input.website) {
    return "sent";
  }

  const subject = input.subject || `Portfolio message from ${input.name}`;

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(contactInfo.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        subject,
        message: input.message,
        _replyto: input.email,
        _subject: `Portfolio: ${subject}`,
        _template: "table",
        _captcha: false,
      }),
    },
  );

  const payload = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;
  const message = payload?.message || "";
  const succeeded = payload?.success === true || payload?.success === "true";

  if (succeeded) {
    return "sent";
  }

  if (/activ/i.test(message)) {
    return "needs_activation";
  }

  throw new Error(message || "Unable to send your message.");
}
