"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signUp } from "@/actions/sign-up";
import FormMessage from "@/components/auth/forms/form-message";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage as FormErrorMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/schemas/sign-up-schema";

import PasswordToggle from "../../password-toggle";

const SignUpForm = () => {
  //@todo create hook
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const searchParams = useSearchParams();
  const oauthError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "email already use"
      : "";

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      signUp(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch(() => setError("something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="name"
                  type="text"
                />
              </FormControl>
              <FormErrorMessage className="absolute bottom-0 left-0 right-0 top-11" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="your.email@example.com"
                  type="email"
                />
              </FormControl>
              <FormErrorMessage className="absolute bottom-0 left-0 right-0 top-11" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <PasswordToggle
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="absolute bottom-0 right-3 top-0 z-10 my-auto"
              />
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder={isOpen ? "123456" : "******"}
                  type={isOpen ? "text" : "password"}
                  className="relative"
                />
              </FormControl>
              <FormErrorMessage className="absolute bottom-0 left-0 right-0 top-11" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="relative">
              <PasswordToggle
                isOpen={isOpenConfirm}
                onClick={() => setIsOpenConfirm(!isOpenConfirm)}
                className="absolute bottom-0 right-3 top-0 z-10 my-auto"
              />
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder={isOpenConfirm ? "123456" : "******"}
                  type={isOpenConfirm ? "text" : "password"}
                  className="relative"
                />
              </FormControl>
              <FormErrorMessage className="absolute bottom-0 left-0 right-0 top-11" />
            </FormItem>
          )}
        />

        <div className="border-b border-t border-zinc-300 py-3 dark:border-zinc-700">
          <FormMessage error={error || oauthError} success={success} />
        </div>

        <Button disabled={isPending} type="submit" className="w-full">
          sign up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
