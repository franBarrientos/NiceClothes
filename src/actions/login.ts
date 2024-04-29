"use server";

import { FormState, LoginFormSchema } from "@/lib/definitions";
import { createSession } from "@/lib/sessions";
import { redirect } from "next/navigation";

export async function login(_: FormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  await createSession(1, "user");
  redirect("/");
}
