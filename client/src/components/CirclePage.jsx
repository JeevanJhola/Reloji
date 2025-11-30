import React from "react";
import SearchBar from "./assets/SearchBar";
import LenderInitial, { LenderDetails } from "./assets/ProfilePic.jsx";

export default function Circle() {
  const lenders = [
    {
      Firstname: "Akshay",
      Lastname: "buntai",
      Location: "thiruvananthapuram,Kerala",
      Phone: " +91 xxxxxxxx23",
    },
    {
      Firstname: "Ravi",
      Lastname: "kumar",
      Location: "Patna,Bihar",
      Phone: " +91 xxxxxxxx34",
    },
    {
      Firstname: "Gazine",
      Lastname: "Perferito",
      Location: "Ernakulam,Kerala",
      Phone: " +91 xxxxxxxx56",
    },
  ];
  const Friends = [
    {
      Firstname: "Mikasa",
      Lastname: "Ackerman",
      Location: "Kannur,Kerala",
      Phone: " +91 xxxxxxxx64",
    },
    {
      Firstname: "Nihad",
      Lastname: "Bangade",
      Location: "coorg,Karnataka",
      Phone: " +91 xxxxxxxx63",
    },
    {
      Firstname: "Ravi",
      Lastname: "Acharya",
      Location: "Delhi",
      Phone: " +91 xxxxxxxx92",
    },
  ];
  const Recommended = [
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
    <div className="min-h-screen  ">
      <div className="text-center">
        <SearchBar
          id="Search"
          placeholder="Search Renter or User"
          width="w-[80%]"
          className="bg-white font-gray  text-center font-mono  m-2 rounded-lg p-2"
        />
      </div>
      <span className="font-3xl bg-white text-center font-serif font-black">
        Friend List
      </span>
      <div className="  p-5 gap-5  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-min  bg-gray-100">
        {Friends.map((Friends, index) => (
          <div key={index} className="bg-white shadow-lg  rounded-lg p-4">
            <div className=" flex items-center gap-4">
              <LenderInitial
                Firstname={Friends.Firstname}
                Lastname={Friends.Lastname}
              />
              <div className="flex flex-col">
                <LenderDetails
                  Firstname={Friends.Firstname}
                  Lastname={Friends.Lastname}
                  Location={Friends.Location}
                  Phone_number={Friends.Phone}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="font-3xl bg-white font-serif font-black">
        Frequently Interacted Renters
      </span>
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
      <span className="font-3xl bg-white  font-serif font-black">
        Recommende Renters
      </span>
      <div className="  p-5 gap-5  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-min  bg-gray-100">
        {Recommended.map((Recommended, index) => (
          <div key={index} className="bg-white shadow-lg  rounded-lg p-4">
            <div className=" flex items-center gap-4">
              <LenderInitial
                Firstname={Recommended.Firstname}
                Lastname={Recommended.Lastname}
              />
              <div className="flex flex-col">
                <LenderDetails
                  Firstname={Recommended.Firstname}
                  Lastname={Recommended.Lastname}
                  Location={Recommended.Location}
                  Phone_number={Recommended.Phone}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
