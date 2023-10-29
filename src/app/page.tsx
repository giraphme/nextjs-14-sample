import { css } from "@/styled-system/css";
import { PropsWithChildren } from "react";

export default function Home() {
  return (
    <main>
      <form
        className={css({
          w: "breakpoint-sm",
          mx: "auto",
          my: 10,
          bg: "gray.100",
          p: 10,
          rounded: "lg",
        })}
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
          <Input type="text" placeholder="sample@example.com" />
        </FormField>

        <FormField label="パスワード">
          <Input type="password" />
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
    </main>
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

function Input(props: React.ComponentProps<"input">) {
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
      {...props}
    />
  );
}

function Button(props: React.ComponentProps<"button">) {
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
      {...props}
    >
      ログイン
    </button>
  );
}
