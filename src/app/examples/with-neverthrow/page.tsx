"use client";

import { useCallback } from "react";
import { LoginForm, LoginFormSchema } from "@/components/LoginForm";
import { toast } from "react-toastify";

import { submit } from "./actions";

export default function WithJsxSingleFile() {
  const submitWithFeedback = useCallback(async (data: LoginFormSchema) => {
    // Server Action はプレーンオブジェクトしか扱えないのでこのサンプルは動かない
    //
    // `Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.`
    const result = await submit(data);

    if (result.isErr()) {
      toast.error(result.error);
      return;
    }

    toast.success(result.value);
  }, []);

  return (
    <main>
      <LoginForm onSubmit={submitWithFeedback} />
    </main>
  );
}
