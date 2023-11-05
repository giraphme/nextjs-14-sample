"use client";

import { useCallback } from "react";
import { LoginForm, LoginFormSchema } from "@/components/LoginForm";
import { toast } from "react-toastify";

import { submit } from "./actions";

export default function WithJsxSingleFile() {
  const submitWithFeedback = useCallback(async (data: LoginFormSchema) => {
    submit(data)
      .then(toast.success)
      .catch((error) => {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      });
  }, []);

  return (
    <main>
      <LoginForm onSubmit={submitWithFeedback} />
    </main>
  );
}
