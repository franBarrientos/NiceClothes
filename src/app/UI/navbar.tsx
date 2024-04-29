import { getSession } from "@/lib/sessions";
import Link from "next/link";
import LogoutButton from "./logoutButton";

export default async function Navbar() {
  const session = await getSession();
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <Link className="font-bold text-xl tracking-tight" href="/">
        NiceClothes
      </Link>
      <div className="flex items-center">
        <Link
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="/"
        >
          Home
        </Link>
        {!session && (
          <>
            <Link
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
              href="/auth/login"
            >
              Login
            </Link>
            <Link
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
              href="/auth/register"
            >
              Sig Up
            </Link>
          </>
        )}
        {session && <LogoutButton />}
      </div>
    </nav>
  );
}
