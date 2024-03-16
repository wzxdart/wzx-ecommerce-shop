"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { verification } from "@/actions/verification";
import CardWrapper from "@/components/auth/card-wrapper";
import FormMessage from "@/components/auth/forms/form-message";

const Verification = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (error || success) return;

    if (!token) {
      setError("token doen't exist");

      return;
    }

    verification(token)
      .then((data) => {
        setError(data.error);
        setSuccess(data.success);
      })
      .catch(() => setError("something went wrong"));
  }, [token, error, success]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      title="verify email"
      description="for sign up u need confirm email, check your emailbox"
      linkHref="/auth/sign-in"
      linkText="sign in"
    >
      <FormMessage error={error} success={success} />
    </CardWrapper>
  );
};

export default Verification;
