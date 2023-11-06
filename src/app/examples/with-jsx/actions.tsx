"use server";

import { type LoginFormSchema } from "@/components/LoginForm";
import { css } from "@/styled-system/css";

export async function submit(data: LoginFormSchema) {
  return (
    <div
      className={css({
        fontWeight: "bold",
        color: "green",
      })}
    >
      Hi, {data.email}
    </div>
  );
}
