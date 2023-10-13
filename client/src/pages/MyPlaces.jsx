import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FcFullTrash } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
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


  const deletePlace = (placeId) => {
    axios.delete(`place/delete/${placeId}`).then((response) => {
      if (response.status === 200) {
        // Remove the deleted place from the state
        setPlaces(places.filter(place => place._id !== placeId));
      } else {
        // Handle error
      }
    });
  };









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
      <div className="flex flex-col items-center mt-5">
        {places.length > 0 &&
          places.map((places) => (
            <div
              className="flex gap-4 bg-slate-200 p-2 rounded-2xl cursor-pointer w-3/4 m-2"
            >
              <div className="flex w-32 h-32 rounded-2xl overflow-hidden">
                <PlaceImg places={places} className="grow" />
              </div>
              <div className="">
                <h2 className="text-xl">{places.title}</h2>
                <p className="text-sm mt-2">{places.description}</p>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center border-slate-400 border-l m-4 p-4 text-2xl">
              <FcFullTrash onClick={()=> deletePlace(places._id)}/>
                <Link to={"/account/places/" + places._id}><FiEdit/></Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
