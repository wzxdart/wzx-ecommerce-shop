import nodemailer from "nodemailer";

const { SMTP_USER, SMTP_PASS } = process.env;

export interface SendEmail {
  to: string;
  subject: string;
  html: string;
}

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export const sendMail = async ({ to, subject, html }: SendEmail) => {
  await transport.sendMail({
    from: SMTP_USER,
    to: to,
    subject: subject,
    html: html,
  });
};
