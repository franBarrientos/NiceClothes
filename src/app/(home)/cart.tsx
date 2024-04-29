"use client";

import useCartStore from "@/stores/cartStore";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const { products } = useCartStore();
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {!products.some((i) => i == null) &&
        products.map((product) => (
          <div key={product.id} className="group relative">
            <Link href={`products/${product.id}`}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <div className="relative h-full w-full ">
                  <Image
                    fill
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
