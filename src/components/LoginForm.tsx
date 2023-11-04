"use client";

import { css } from "@/styled-system/css";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(6).max(200).regex(/[ -~]/),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export function LoginForm({
  onSubmit,
}: {
  onSubmit: (data: LoginFormSchema) => Promise<void>;
}) {
  const { register, handleSubmit } = useForm<LoginFormSchema>({
    defaultValues: {
      email: "dummy@example.com",
    },
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form
      className={css({
        w: "breakpoint-sm",
        mx: "auto",
        my: 10,
        bg: "gray.100",
        p: 10,
        rounded: "lg",
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1
        className={css({
          fontSize: "2xl",
          fontWeight: "bolder",
          textAlign: "center",
        })}
      >
        LOGIN
      </h1>

      <FormField label="メールアドレス">
        <Input
          type="email"
          placeholder="sample@example.com"
          {...register("email")}
        />
      </FormField>

      <FormField label="パスワード">
        <Input type="password" {...register("password")} />
      </FormField>

      <div
        className={css({
          display: "flex",
          justifyContent: "flex-end",
          mt: "10",
        })}
      >
        <Button type="submit">ログイン</Button>
      </div>
    </form>
  );
}

function FormField({
  label,
  children,
}: PropsWithChildren<{ label: React.ReactNode }>) {
  return (
    <label className={css({ mt: 5, display: "block" })}>
      <div className={css({ fontWeight: "bolder" })}>{label}</div>
      {children}
    </label>
  );
}

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  function Input(props, ref) {
    return (
      <input
        className={css({
          display: "block",
          mt: "2",
          w: "100%",
          px: "6",
          py: "3",
          rounded: "md",
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const Button = forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  function Button(props, ref) {
    return (
      <button
        className={css({
          color: "white",
          bg: "blue.500",
          fontWeight: "bolder",
          px: "4",
          py: "2",
          rounded: "lg",
          fontSize: "lg",
        })}
        ref={ref}
        {...props}
      >
        ログイン
      </button>
    );
  }
);
