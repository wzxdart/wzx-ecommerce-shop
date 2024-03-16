"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { newPassword } from "@/actions/new-password";
import { reset } from "@/actions/reset";
import FormMessage from "@/components/auth/forms/form-message";
import PasswordToggle from "@/components/password-toggle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage as FormErrorMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { newPasswordSchema } from "@/schemas/new-password-schema";

const NewPasswordForm = () => {
  //@todo create hook
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof newPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      newPassword(values, token)
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

        <div className="border-b border-t border-zinc-300 py-3 dark:border-zinc-700">
          <FormMessage error={error} success={success} />
        </div>

        <Button disabled={isPending} type="submit" className="w-full">
          reset password
        </Button>
      </form>
    </Form>
  );
};

export default NewPasswordForm;
