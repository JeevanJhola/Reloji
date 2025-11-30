import React from "react";
import {
  Warehouse,
  Hamburger,
  Shovel,
  Layers,
  UserRoundSearch,
} from "lucide-react";
import LenderInitial, { LenderDetails } from "./assets/ProfilePic.jsx";
import SearchBar from "./assets/SearchBar.jsx";
export default function Discover() {
  const lenders = [
    {
      Firstname: "Akinnesh",
      Lastname: "Ravinand",
      Location: "Kannur,Kerala",
      Phone: " +91 xxxxxxxx09",
    },
    {
      Firstname: "Rahul",
      Lastname: "Tagore",
      Location: "coorg,Karnataka",
      Phone: " +91 xxxxxxxx58",
    },
    {
      Firstname: "Farhan",
      Lastname: "Naushad",
      Location: "Delhi",
      Phone: " +91 xxxxxxxx36",
    },
  ];

  return (
    <>
      <div className="min-h-screen  ">
        <div className="  p-5 gap-5  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-min  bg-gray-100">
          {lenders.map((lender, index) => (
            <div key={index} className="bg-white shadow-lg  rounded-lg p-4">
              <div className=" flex items-center gap-4">
                <LenderInitial
                  Firstname={lender.Firstname}
                  Lastname={lender.Lastname}
                />
                <div className="flex flex-col">
                  <LenderDetails
                    Firstname={lender.Firstname}
                    Lastname={lender.Lastname}
                    Location={lender.Location}
                    Phone_number={lender.Phone}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="  h-[100%] bg-gray shadow-lg text-center rounded-lg p-5">
          <SearchBar
            id="Discover"
            placeholder="Search Renter Name , Product name or Product id"
            width="w-[80%]"
            className="bg-white font-gray  text-center font-mono  rounded-lg p-2"
          />
        </div>
        <div className="bg-gray m-5 w-[80%] h=[100%]">
          <h1>
            {" "}
            <span className="font-bold text-xl bg-white font-sans">
              Preferences
            </span>
          </h1>
        </div>
        <div className="p-5 gap-5  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-min  bg-gray-100">
          <div className="  bg-white shadow-lg  rounded-lg p-4">
            <div>
              <Warehouse />
              <span className="font-bold">Factory Goods</span>
            </div>
          </div>
          <div className="   bg-white shadow-lg  rounded-lg p-4">
            <div>
              <Hamburger />
              <span className="font-bold">Drinks and Food</span>
            </div>
          </div>
          <div className=" bg-white shadow-lg  rounded-lg p-4">
            <div>
              <Shovel />
              <span className="font-bold">Utilities</span>
            </div>
          </div>
          <div className=" bg-white shadow-lg  rounded-lg p-4">
            <div>
              <Layers />
              <span className="font-bold">Other neccesities</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
