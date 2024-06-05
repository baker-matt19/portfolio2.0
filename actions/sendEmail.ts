"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// using resend to send the email from out contact form
const resend = new Resend(process.env.RESEND_API_KEY);

// created function that gives us access to the formData on the server side
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    // send email
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "matt.sheetz19@gmail.com",
      subject: "Contact Form Submission",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      //   react: <ContactFormEmail senderEmail={senderEmail} message={message} />,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return data;
};
