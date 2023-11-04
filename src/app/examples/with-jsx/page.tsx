"use client";

import { LoginForm, LoginFormSchema } from "@/components/LoginForm";
import { submit } from "./actions";
import { useCallback, useState } from "react";

export default function WithJsxSingleFile() {
  const [message, setMessage] = useState<JSX.Element | null>(null);

  const submitWithFeedback = useCallback(async (data: LoginFormSchema) => {
    const result = await submit(data);
    setMessage(result);
  }, []);

  return (
    <main>
      <LoginForm onSubmit={submitWithFeedback} />
      {message}
    </main>
  );
}
