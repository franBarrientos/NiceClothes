"use server";

export async function getProducts() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing",
  );
  if (!res.ok) return [];
  return res.json();
}
