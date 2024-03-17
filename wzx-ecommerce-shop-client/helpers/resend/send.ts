import { Resend } from "resend";

import { BASE_URL } from "@/lib/const";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationTokenEmail = async (
  email: string,
  token: string,
) => {
  const link = `${BASE_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "confirm your email",
    html: `<a href="${link}">confirm email here</a>`,
  });
};

export const sendResetTokenEmail = async (email: string, token: string) => {
  const link = `${BASE_URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "reset your password",
    html: `<a href="${link}">reset password here</a>`,
  });
};

export const sendTwoFATokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2fa code",
    html: `<p>2fa code: <strong>${token}</strong></p>`,
  });
};
