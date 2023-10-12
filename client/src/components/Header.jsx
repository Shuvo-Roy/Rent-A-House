import React, { useContext } from "react";
import { BsHouse, BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="flex justify-between bg-slate-200 py-4 px-12">
      <Link to={"/"} className="flex items-center justify-center gap-2">
        <BsHouse className="w-8 h-8 text-rose-800" />
        <span className="font-semibold text-xl">Rent A House</span>
      </Link>
      <div className="flex items-center gap-4 border border-slate-400 rounded-full">
        <input type="text" placeholder="Search here" className="border-none outline-none mx-2 bg-slate-200"/>
        <button className="text-red-500 rounded-full m-2 bg-slate-200">
          <BsSearch className="w-8 h-8" />
        </button>
      </div>
      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center border rounded-md px-2"
      >
        {user ? (
          <div className="bg-gray-500 text-white rounded-full p-1">
            <CiUser className="w-6 h-6" />
          </div>
        ) : (
          <div className="border border-green-600 px-4 py-1">Login</div>
        )}
        {!!user && <div className="m-2">{user.name}</div>}
      </Link>
    </header>
  );
}
