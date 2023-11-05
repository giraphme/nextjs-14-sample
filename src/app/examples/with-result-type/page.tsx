"use client";

import { useCallback } from "react";
import { LoginForm, LoginFormSchema } from "@/components/LoginForm";
import { toast } from "react-toastify";

import { submit } from "./actions";

export default function WithJsxSingleFile() {
  const submitWithFeedback = useCallback(async (data: LoginFormSchema) => {
    const result = await submit(data);

    if (result.type === "error") {
      toast.error(result.error);
      return;
    }

    toast.success(result.data);
  }, []);

  return (
    <main>
      <LoginForm onSubmit={submitWithFeedback} />
    </main>
  );
}
