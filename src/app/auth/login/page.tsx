"use client";
import { login } from "@/actions/login";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, action] = useFormState(login, undefined);

  return (
    <form className="text-black" action={action}>
      <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Login
          </h1>
          <div>
            <label className="block mb-1 text-gray-600 font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
          {state?.errors?.email && (
            <p className="text-red-600">{state.errors.email}</p>
          )}
          <div>
            <label className="block mb-1 text-gray-600 font-semibold">
              Password
            </label>
            <input
              type="text"
              name="password"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
          {state?.errors?.password && (
            <p className="text-red-600">{state.errors.password}</p>
          )}
        </div>
        <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
          Login
        </button>
      </div>
    </form>
  );
}
