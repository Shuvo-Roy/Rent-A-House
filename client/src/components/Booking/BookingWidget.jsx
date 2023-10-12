import React, { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [redirect, setRedirect] = useState("");

  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [place, user]);

  let numberOfDays = 0;
  if (checkIn && checkOut) {
    numberOfDays = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookingDone() {
    const response = await axios.post("booking/bookings", {
      checkIn,
      checkOut,
      numGuests,
      Place: place._id,
      price: numberOfDays * place.price,
      name,
      mobile,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <div className="bg-gray-50 p-4 rounded-2xl">
        <div>
          <p className="text-2xl text-center">Price: ${place.price} / night</p>
        </div>
        <div className="border rounded-2xl mt-4">
          <div className="flex">
            <div className="my-4 py-2 px-4">
              <label>Check In:</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="my-4 py-2 px-4 border-l">
              <label>Check Out:</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div className="my-4 py-2 px-4 border-t">
            <label>Maximum guests:</label>
            <input
              type="number"
              value={numGuests}
              onChange={(e) => setNumGuests(e.target.value)}
            />
          </div>
          {numberOfDays > 0 && (
            <div className="py-2 px-4 border-t">
              <label>Your name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Contact number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          )}
        </div>

        <button onClick={bookingDone} className="primary">
          Book this place
          {numberOfDays > 0 && <span> ${numberOfDays * place.price}</span>}
        </button>
      </div>
    </div>
  );
}
