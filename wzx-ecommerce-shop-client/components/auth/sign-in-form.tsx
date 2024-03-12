"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "@/helpers/actions/sign-in";
import signInSchema from "@/schemas/sign-in-schema";

const SignInForm = () => {
  const searchParams = useSearchParams();
  const oauthError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "enail already use"
      : "";

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const data = await signIn(values);
      setError(data.error);
      setSuccess(data.success);

      toast({
        title: data.error || oauthError || data.success,
      });
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
              <FormMessage className="absolute bottom-0 left-0 right-0 top-11" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="******"
                  type="password"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-11" />
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
                <FormLabel>Remember me</FormLabel>
              </FormItem>
            )}
          />
          <Button variant={"link"}>
            <Link href="/auth/reset">Forgot your password?</Link>
          </Button>
        </div>

        <Button disabled={isPending} type="submit" className="mt-5 w-full">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
