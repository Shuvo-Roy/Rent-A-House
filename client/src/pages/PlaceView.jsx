import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BookingWidget from "../components/Booking/BookingWidget";
import PlaceGallery from "../components/PlaceGallery";
import AddressLink from "../components/AddressLink";
import { UserContext } from "../context/UserContext";

export default function PlaceView() {
  const { id  } = useParams();
  const { user } = useContext(UserContext);
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get(`place/places/${id}`).then((response) => {
        setPlace(response.data);
      });
    }
  }, [id]);

  if (!place) return null;

  return (
    <div className="mt-4 px-12">
      <h1 className="text-2xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      {/* <AiOutlineUser>{place.name}</AiOutlineUser> */}
      <PlaceGallery place={place} />

      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          <p>Check In: {place.checkIn}</p>
          <p>Check out: {place.checkOut}</p>
          <p>Maximum guests: {place.maxGuests}</p>
        </div>
        {user?._id !== place?.owner && <BookingWidget place={place} />}
        
      </div>
      <div>
        <h2 className="font-semibold text-2xl">Perks</h2>
        <ul className="flex gap-4 mt-1 text-lg text-gray-700">
          {place.perks.map((perk,index)=>(
            <li key={index} className="border rounded-2xl border-slate-300 px-8 py-2">{perk}</li>
          ))
          }
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-2xl">Extra Info</h2>
        <p className="mt-1 text-sm text-gray-500 leading-4">
          {place.extraInfo}
        </p>
      </div>
    </div>
  );
}
