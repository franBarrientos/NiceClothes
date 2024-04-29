import { getProducts } from "@/actions/get-products";
import { Product } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import Cart from "./cart";
export default async function Home() {
  const products = (await getProducts()) as Product[];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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

        <h2 className="text-2xl mt-6 font-bold tracking-tight text-gray-900">
          Cart
        </h2>

        <Cart />
      </div>
    </div>
  );
}
