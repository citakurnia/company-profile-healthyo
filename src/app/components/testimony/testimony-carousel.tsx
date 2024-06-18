import { Entry } from "contentful";
import { TypeTestimonyFields } from "@/types/contentful";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function CarouselTestimony({
  testimonies,
}: {
  testimonies: Entry<TypeTestimonyFields, undefined, string>[];
}) {
  return (
    <>
      <Carousel>
        {testimonies.map((testimony) => (
          <div
            key={testimony.sys.id}
            className="mb-4 flex flex-col items-center"
          >
            <p className="mb-4 text-lg font-semibold text-black/80">
              {testimony.fields.name}
            </p>
            <Image
              className="rounded-full"
              alt="image"
              src={`https:${testimony.fields.closeUpPhoto.fields.file.url}`}
              width={125}
              height={125}
            />
            <p className="text-sm mt-4 p-3 text-black/80 text-pretty text-center bg-pink-soft/60 rounded-xl">
              &quot;{testimony.fields.testimonyText}&quot;
            </p>
          </div>
        ))}
      </Carousel>
    </>
  );
}
