"use server";

import { type LoginFormSchema } from "@/components/LoginForm";

const validUser = { email: "dummy@example.com", password: "123456" };

export async function submit(data: LoginFormSchema) {
  if (data.email !== validUser.email || data.password !== validUser.password) {
    throw new Error("Login Failure");
  }

  return <div>Hi, {data.email}</div>;
}
