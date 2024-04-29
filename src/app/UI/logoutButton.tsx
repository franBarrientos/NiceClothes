"use client";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        logout();
        router.push("/");
      }}
      className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
    >
      Log out
    </button>
  );
}
