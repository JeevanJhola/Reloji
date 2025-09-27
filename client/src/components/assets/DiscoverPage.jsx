import React from 'react';
export default function LenderInitial({Firstname , Lastname}){
     const FirstChar = Firstname ? Firstname.charAt(0).toUpperCase():"";
     const LastChar = Lastname ? Lastname.charAt(0).toUpperCase():"";
     const initials=`${FirstChar}${LastChar}`;
     return (
        <div className ="h-12 w-13 rounded-full bg-gray-400 text-black-300 font-sans">
         {initials}
        </div>
     );
     
 }
