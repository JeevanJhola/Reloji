import React from "react";
export default function LenderInitial({ Firstname, Lastname }) {
  const FirstChar = Firstname ? Firstname.charAt(0).toUpperCase() : "";
  const LastChar = Lastname ? Lastname.charAt(0).toUpperCase() : "";
  const initials = `${FirstChar}${LastChar}`;
  return (
    <div className="h-12 w-12 rounded-full bg-blue-400 text-black flex justify-center items-center font-semibold text-lg">
      {initials}
    </div>
  );
}

export function LenderDetails({ Firstname, Lastname, Location, Phone_number }) {
  return (
    <>
      <div>
        <span className="font-bold ">Name : </span>
        {Firstname} {Lastname}
      </div>
      <div>
        <span className="font-bold ">Location : </span>
        {Location}
      </div>
      <div>
        <span className="font-bold ">Phone No : </span>
        {Phone_number}
      </div>
    </>
  );
}
