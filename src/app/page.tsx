import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/examples/with-jsx">JSX を返す</Link>
      <Link href="/examples/error-handling">
        パスワードが間違っている場合に例外を throw する
      </Link>
      <Link href="/examples/with-neverthrow">
        neverthrow を使って Result タイプを返す（動かない）
      </Link>
      <Link href="/examples/with-result-type">
        自作の Result タイプを使用する
      </Link>
    </main>
  );
}
