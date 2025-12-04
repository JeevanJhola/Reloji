import React from "react";
import { useState, useEffect } from "react";
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
  const [lenders, setLenders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/lenders")
      .then((res) => res.json())
      .then((data) => setLenders(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="min-h-screen">
        <div className="p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-gray-100">
          {lenders.map((lender, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex items-center gap-4">
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

        <div className="h-[100%] bg-gray shadow-lg text-center p-5">
          <SearchBar
            id="Discover"
            placeholder="Search Renter Name , Product name or Product id"
            width="w-[80%]"
            className="bg-white font-gray text-center rounded-lg p-2"
          />
        </div>
        <div className="my-6 px-4">
          <h1 className="font-bold text-xl font-sans">Preferences</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div>
              <Warehouse />
              <span className="font-bold">Factory Goods</span>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div>
              <Hamburger />
              <span className="font-bold">Drinks and Food</span>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div>
              <Shovel />
              <span className="font-bold">Utilities</span>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
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
