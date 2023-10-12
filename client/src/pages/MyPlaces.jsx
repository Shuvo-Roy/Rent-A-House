import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import AccountNavigation from "../components/AccountNavigation";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("place/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  console.log(places)
  return (
    <div>
      <AccountNavigation />
      <br />
      <div className="text-center">
        <Link
          className="inline-flex items-center gap-2 bg-primary text-white py-2 px-6 rounded-sm"
          to={"/account/places/new"}
        >
          <AiOutlinePlus />
          Add new places
        </Link>
      </div>
      <div className="mt-4 px-12">
        {places.length > 0 &&
          places.map((places) => (
            <Link
              to={"/account/places/" + places._id}
              className="flex gap-4 bg-slate-100 p-4 rounded-2xl cursor-pointer"
            >
              <div className="flex w-32 h-32 grow shrink-0">
                <PlaceImg places={places} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{places.title}</h2>
                <p className="text-sm mt-2">{places.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
