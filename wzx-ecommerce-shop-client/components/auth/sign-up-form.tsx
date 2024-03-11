"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { SignUp } from "@/helpers/actions/sign-up";
import signUpShema from "@/schemas/sign-up-schema";

const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof signUpShema>>({
    resolver: zodResolver(signUpShema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpShema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const data = await SignUp(values);
      setError(data.error);
      setSuccess(data.success);

      toast({
        title: data.error || data.success,
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
          name="firstName"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="john"
                  type="text"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-11" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="doe"
                  type="text"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-11" />
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
                  placeholder="john.doe@example.com"
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

        <FormField
          control={form.control}
          name="confirmPassword"
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

        <Button disabled={isPending} type="submit" className="mt-5 w-full">
          Sign up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
