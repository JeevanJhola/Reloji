import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./assets/SearchBar";
import LenderInitial, { LenderDetails } from "./assets/ProfilePic.jsx";

export default function Circle() {
  const [lenders, setLenders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/lenders")
      .then((res) => res.json())
      .then((data) => setLenders(data))
      .catch((err) => console.error(err));
  }, []);

  const [Friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/friends")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error(err));
  }, []);

  const [Recommended, setRecommend] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/lenders")
      .then((res) => res.json())
      .then((data) => setRecommend(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen  ">
      <div className="text-center">
        <SearchBar
          id="Search"
          placeholder="Search Renter or User"
          width="w-[80%]"
          className="bg-white font-gray text-center rounded-lg m-2 p-2"
        />
      </div>
      <div className="my-6 px-4">
        <span className="font-bold text-xl font-sans">Friend List</span>
      </div>
      <div className="p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-gray-100">
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
      <div className="my-6 px-4">
        <span className="font-bold text-xl font-sans">
          Frequently Interacted Renters
        </span>
      </div>
      <div className="p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-gray-100">
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
      <div className="my-6 px-4">
        <span className="font-bold text-xl font-sans">Recommended Renters</span>
      </div>
      <div className="p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-gray-100">
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
