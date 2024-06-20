import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { TypeProductFields } from "@/types/contentful";
import { Entry } from "contentful";
import { ReactNode } from "react";

export default function CarouselProduct({
  products,
  images,
}: {
  products: Entry<TypeProductFields, undefined, string>[];
  images: string[];
}): ReactNode {
  return (
    <>
      <Carousel>
        {products.map((product) => (
          <div
            key={product.fields.productId}
            className="mb-4 flex flex-col items-center"
          >
            <Image
              className="drop-shadow-md"
              alt="image"
              src={images[product.fields.productId - 1]}
              width={200}
              height={200}
            />
            <p className="text-blue-deep font-semibold">
              {product.fields.title}
            </p>
          </div>
        ))}
      </Carousel>
    </>
  );
}
