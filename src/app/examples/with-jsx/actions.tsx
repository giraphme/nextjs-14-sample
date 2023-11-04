"use server";

import { type LoginFormSchema } from "@/components/LoginForm";

export async function submit(data: LoginFormSchema) {
  return <div>Hi, {data.email}</div>;
}
