import React from "react";
import LenderInitial from "./ProfilePic.jsx";
export default function Discover(){
    return (
    <div className="min-h-screen flex justify-center  items-start pt-10  gap-5 m-5 bg-gray-100">

        <div className="w-3/4  bg-white shadow-lg rounded-lg p-4">
          <LenderInitial Firstname="Akinnesh" Lastname="Ravinand" />
        </div><div className="w-3/4  bg-white shadow-lg rounded-lg p-4">
          <LenderInitial Firstname="Rahul" Lastname="Tagore" />
        </div>
      </div>
  );
}

