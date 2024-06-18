"use client";

import { client } from "@/utils/contentful";
import { Entry } from "contentful";
import { TypeProductFields } from "@/types/contentful";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";

import Image from "next/image";
import TabProduct from "./product-tab";

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
        <div className="flex flex-col text-center pt-5 my-7 text-4xl font-bold text-white-broken drop-shadow-md">
          PICK YOUR FLAVOUR!
        </div>
        {/* <div className="flex flex-col py-4 px-4 m-6 rounded-3xl "> */}
        <div className="flex flex-col px-2 py-2 lg:pt-4 md:px-10 lg:px-2 xl:px-10">
          <ProductCard products={products} />
        </div>
        {/* </div> */}
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
      <div className="lg:hidden">
        <TabProduct products={products} images={productImages} />
      </div>
      <div className="hidden lg:flex lg:flex-row lg:space-x-4 justify-between lg:px-2">
        {products.map((product) => (
          <Paper
            key={product.fields.productId}
            square={false}
            elevation={1}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              transition: "transform 0.3s, background-color 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <div
              key={product.fields.productId}
              className="mb-4 mt-3 flex flex-col items-center"
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
              <p className="text-xs px-4 pt-3 text-center">
                {product.fields.productDescription}
              </p>
              <div className="flex text-md justify-between w-full px-4 pt-4 text-xs">
                <div className="bg-blue-soft py-1 px-2 rounded-xl">
                  Rp. {product.fields.price}
                </div>
                <div className="bg-pink-soft py-1 px-2 rounded-xl text-black/70 hover:bg-blue-med font-semibold">
                  Buy Here
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </>
  );
}
