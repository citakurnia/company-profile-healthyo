"use client";

import UserTeam from "@/types/random-user/TypeUserTeam";
import React, { useEffect, useState } from "react";
import CarouselUsers from "./users-team";

export default function Team() {
  const [users, setUsers] = useState<UserTeam[]>([]);

  async function fetchUserTeams() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      throw new Error("Unable to catch User Teams");
    }
  }

  useEffect(() => {
    fetchUserTeams();
  }, []);

  const expertise = [
    "Executive Director",
    "Marketing and Communication",
    "Production",
    "Quality Control",
  ];

  return (
    <>
      {/* <div className="bg-white/50 rounded-2xl pb-4 m-5"> */}
      <h2 className="text-center pt-3 mb-3 text-black/70 z-50">TEAM</h2>
      <div
        className="lg:hidden"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <CarouselUsers users={users} expertise={expertise} />
      </div>

      <div className="hidden lg:flex lg:space-x-3 justify-between lg:px-5 xl:px-24">
        {users.map((user, index) => (
          <div className="flex flex-col items-center" key={index}>
            <img
              src={user.picture.large}
              alt="User Photo"
              style={{ borderRadius: "50%", height: "125px", width: "125px" }}
            />
            <div className="mt-2 font-bold text-blue-deep text-lg">{`${user.name.first} ${user.name.last}`}</div>
            <div className="font-semibold mb-2">{expertise[index]}</div>
            <div className="text-sm">Phone: {user.phone}</div>
            <div className="text-sm">{user.email}</div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}
