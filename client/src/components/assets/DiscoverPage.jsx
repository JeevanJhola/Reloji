import React from "react";
import LenderInitial from "./ProfilePic.jsx";
export default function Discover() {
  const users = [
    { firstname: "Akinnesh", lastname: "Ravinand" },
    { firstname: "Rahul", lastname: "Tagore" },
  ];
  return (
    <div className="min-h-screen flex justify-center  items-start pt-10  gap-5 m-5 bg-gray-100">
      {users.map((user, index) => {
        return (
          <div key={index} className="w-3/4 bg-white shadow-lg rounded-lg p-4">
            <LenderInitial
              Firstname={user.firstname}
              Lastname={user.lastname}
            />
          </div>
        );
      })}
    </div>
  );
}
