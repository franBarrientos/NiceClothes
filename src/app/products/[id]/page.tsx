import { getProductById } from "@/actions/getProductById";
import BuyButton from "./UI/BuyButton";
export default async function Product({ params }: { params: { id: string } }) {
  let product;
  try {
    product = await getProductById(params.id);
  } catch (_) {
    return "not found";
  }
  return (
    <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
      <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
        <div className="relative w-full md:w-48 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
              Product name
            </h1>
            <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
              $110.00
            </div>
            <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              In stock
            </div>
          </div>
          <div className="flex mb-4 text-sm font-medium">
            <BuyButton product={product} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
}
