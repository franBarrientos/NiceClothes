"use server";

import { Product } from "@/lib/definitions";

export async function getProductById(id: any): Promise<Product> {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  if (!res.ok) throw new Error("clothe not found");
  return res.json();
}
