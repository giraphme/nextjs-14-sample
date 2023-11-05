"use server";

import { type LoginFormSchema } from "@/components/LoginForm";

const validUser = { email: "dummy@example.com", password: "123456" };

type Success<T> = { type: "ok"; data: T };
type Error<E> = { type: "error"; error: E };
type Result<T, E> = Success<T> | Error<E>;

export async function submit(
  data: LoginFormSchema
): Promise<Result<string, string>> {
  if (data.email !== validUser.email || data.password !== validUser.password) {
    return { type: "error", error: "Login Failure" };
  }

  return { type: "ok", data: `Hi, ${data.email}` };
}
