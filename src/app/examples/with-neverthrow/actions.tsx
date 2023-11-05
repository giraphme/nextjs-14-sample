"use server";

import { type LoginFormSchema } from "@/components/LoginForm";
import { Result, err, ok } from "neverthrow";

const validUser = { email: "dummy@example.com", password: "123456" };

export async function submit(
  data: LoginFormSchema
): Promise<Result<string, string>> {
  if (data.email !== validUser.email || data.password !== validUser.password) {
    return err("Login Failure");
  }

  return ok(`Hi, ${data.email}`);
}
