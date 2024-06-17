import UserTeam from "@/types/random-user/TypeUserTeam";
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
            <img
              src={user.picture.large}
              alt="User Photo"
              style={{ borderRadius: "50%", height: "150px", width: "150px" }}
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
