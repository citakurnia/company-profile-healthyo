import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import UserTeam from "@/types/random-user/TypeUserTeam";

import { Entry } from "contentful";
import { TypeTestimonyFields } from "@/types/contentful";
import { ReactNode } from "react";

export default function CarouselTestimony({
  testimonies,
  users,
}: {
  testimonies: Entry<TypeTestimonyFields, undefined, string>[];
  users: UserTeam[];
}): ReactNode {
  return (
    <>
      <Carousel>
        {testimonies.map((testimony, index) => (
          <div
            key={testimony.sys.id}
            className="mb-4 flex flex-col items-center"
          >
            <p className="mb-4 text-lg font-semibold text-black/80">
              {`${users[index].name.first} ${users[index].name.last}`}
            </p>
            <Image
              className="rounded-full"
              alt="image"
              src={users[index].picture.large}
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
