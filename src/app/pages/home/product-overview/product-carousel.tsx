import { TypeProductFields } from "@/types/contentful";
import { Entry } from "contentful";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function CarouselProduct({
  products,
}: {
  products: Entry<TypeProductFields, undefined, string>[];
}) {
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
              src={`https:${product.fields.productPhoto.fields.file.url}`}
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
