"use client";

import { useCallback } from "react";
import { LoginForm, LoginFormSchema } from "@/components/LoginForm";
import { toast } from "react-toastify";

import { submit } from "./actions";

export default function WithJsxSingleFile() {
  const submitWithFeedback = useCallback(async (data: LoginFormSchema) => {
    const message = await submit(data);
    toast.success(message);
  }, []);

  return (
    <main>
      <LoginForm onSubmit={submitWithFeedback} />
    </main>
  );
}
