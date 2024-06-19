import UserTeam from "@/types/random-user/TypeUserTeam";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function CarouselUsers({
  users,
  expertise,
}: {
  users: UserTeam[];
  expertise: string[];
}) {
  return (
    <>
      <Carousel>
        {users.map((user, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Image
              src={user.picture.large}
              alt="User Photo"
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="mt-2 font-bold text-blue-deep text-lg">{`${user.name.first} ${user.name.last}`}</div>
            <div className="font-semibold mb-2">{expertise[index]}</div>
            <div className="text-sm">Phone: {user.phone}</div>
            <div className="text-sm">{user.email}</div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
