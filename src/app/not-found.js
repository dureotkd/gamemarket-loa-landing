// app/not-found.js
import { redirect } from "next/navigation";

export default function NotFound() {
  // 404 발생 시 홈으로 강제 이동
  redirect("/");
  return null;
}
