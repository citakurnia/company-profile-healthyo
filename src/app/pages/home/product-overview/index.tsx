"use client";

import { client } from "@/utils/contentful";
import { Entry } from "contentful";
import { TypeProductFields } from "@/types/contentful";
import { ReactNode } from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import CarouselProduct from "./product-carousel";

async function fetchProducts(): Promise<
  Entry<TypeProductFields, undefined, string>[]
> {
  try {
    const data = await client.getEntries<TypeProductFields>({
      content_type: "product",
    });
    // console.log(data.items);
    return data.items;
  } catch (err) {
    throw new Error("Unable to catch product information");
  }
}

export default function ProductOverview(): ReactNode {
  const [products, setProducts] = useState<
    Entry<TypeProductFields, undefined, string>[] | null
  >(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  if (products !== null) {
    return (
      <>
        <div className="flex flex-col py-4 px-4 m-6 rounded-3xl bg-blue-soft">
          <div className="flex flex-col px-2 py-2 lg:pt-4 md:px-10 lg:px-2 xl:px-10">
            <ProductCard products={products} />
          </div>
          <Link
            href="/pages/products"
            className="text-sm text-right mt-2 mr-4 text-blue-deep hover:underline hover:underline-offset-2"
          >
            Click here for more details
          </Link>
        </div>
      </>
    );
  }
}

function ProductCard({
  products,
}: {
  products: Entry<TypeProductFields, undefined, string>[];
}) {
  const productImages = [
    "/1plain.png",
    "/2strawberry.png",
    "/3blueberry.png",
    "/4mango.png",
  ];
  return (
    <>
      <h2 className="pb-6 text-center">
        <div className="bg-white/50 rounded-full py-1">OUR PRODUCTS</div>
      </h2>
      <div className="lg:hidden" style={{ textAlign: "center" }}>
        <CarouselProduct products={products} images={productImages} />
      </div>

      <div className="hidden lg:flex lg:flex-row lg:space-x-3 justify-between lg:px-5 xl:px-24">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.fields.productId}
              className="mb-4 flex flex-col items-center"
            >
              <Image
                className="drop-shadow-md"
                alt="image"
                src={productImages[product.fields.productId - 1]}
                width={200}
                height={200}
              />
              <p className="text-blue-deep font-semibold">
                {product.fields.title}
              </p>
            </div>
          ))
        ) : (
          // Placeholder content
          <div className="bg-white p-4 shadow rounded">
            <div className="w-48 h-48 animate-pulse rounded" />
            <h3 className="mt-2 text-lg font-bold h-6 w-3/4 animate-pulse"></h3>
            <p className="text-gray-700  h-4 w-full animate-pulse"></p>
          </div>
        )}
      </div>
    </>
  );
}
