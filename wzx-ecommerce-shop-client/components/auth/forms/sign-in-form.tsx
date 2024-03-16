"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signIn } from "@/actions/sign-in";
import { signOut } from "@/auth";
import FormMessage from "@/components/auth/forms/form-message";
import PasswordToggle from "@/components/password-toggle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage as FormErrorMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/sign-in-schema";

const SignInForm = () => {
  //@todo create hook
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();
  const oauthError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "email already use"
      : "";

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const remember = form.getValues("remember");

  useEffect(() => {
    const handleSignOut = (event: BeforeUnloadEvent) => {
      if (!remember) signOut();
    };

    window.addEventListener("beforeunload", handleSignOut);

    return window.removeEventListener("beforeunload", handleSignOut);
  }, [remember]);

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      signIn(values)
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

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    disabled={isPending}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>remember me</FormLabel>
              </FormItem>
            )}
          />
          <Button variant={"link"}>
            <Link href="/auth/reset">forgot your password?</Link>
          </Button>
        </div>

        <div className="border-b border-t border-zinc-300 py-3 dark:border-zinc-700">
          <FormMessage error={error || oauthError} success={success} />
        </div>

        <Button disabled={isPending} type="submit" className="w-full">
          sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
