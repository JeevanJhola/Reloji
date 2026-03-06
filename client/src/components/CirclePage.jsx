import React from "react";
import SearchBar from "./assets/SearchBar";
import LenderInitial, { LenderDetails } from "./assets/ProfilePic.jsx";
import { useLenders } from "../hooks/useLenders";
import { useFriends } from "../hooks/useFriends";

export default function Circle() {
  const { lenders, isLoading: lendersLoading, error: lendersError } = useLenders();
  const { friends, isLoading: friendsLoading, error: friendsError } = useFriends();

  if (lendersLoading || friendsLoading) {
    return <div>Loading...</div>;
  }

  if (lendersError || friendsError) {
    return <div>Error: {lendersError?.message || friendsError?.message}</div>;
  }

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
        {friends.map((friend, index) => (
          <div key={index} className="bg-white shadow-lg  rounded-lg p-4">
            <div className=" flex items-center gap-4">
              <LenderInitial
                Firstname={friend.Firstname}
                Lastname={friend.Lastname}
              />
              <div className="flex flex-col">
                <LenderDetails
                  Firstname={friend.Firstname}
                  Lastname={friend.Lastname}
                  Location={friend.Location}
                  Phone_number={friend.Phone}
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
    </div>
  );
}
