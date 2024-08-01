'use client';
import Image from "next/image";
import { useState } from "react";
import { Login, Registration } from "./ui";

export default function Home() {
  const [toggleForm,setToggleForm]=useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    <div className="h-[5vh] w-full"></div>
      <div className="h-[95vh] w-full flex justify-center items-center flex-col bg-slate-800">
      {/* <Toast/> */}
        {!toggleForm ? <Registration setToggleForm={setToggleForm}/>: 

        <Login setToggleForm={setToggleForm}/>}
      </div>
    </main>
  );
}
