import { Resend } from "resend";

import { url } from "@/lib/const";

const resend = new Resend(process.env.RESEND_API_KEY);

export const verificationEmail = async (email: string, token: string) => {
  const link = `${url}/auth/verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "confirm your email",
    html: `<a href="${link}">confirm here</a>`,
  });
};
