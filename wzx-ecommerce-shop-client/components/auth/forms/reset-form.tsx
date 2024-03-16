"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { reset } from "@/actions/reset";
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
import { resetSchema } from "@/schemas/reset-schema";

const ResetForm = () => {
  //@todo create hook
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof resetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      reset(values)
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

        <div className="border-b border-t border-zinc-300 py-3 dark:border-zinc-700">
          <FormMessage error={error} success={success} />
        </div>

        <Button disabled={isPending} type="submit" className="w-full">
          sent reset on email
        </Button>
      </form>
    </Form>
  );
};

export default ResetForm;
