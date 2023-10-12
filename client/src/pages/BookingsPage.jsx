import React, { useEffect, useState } from "react";
import AccountNavigation from "../components/AccountNavigation";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";

import { Link } from "react-router-dom";
import BookingDate from "../components/Booking/BookingDate";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("booking/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div>
      <AccountNavigation />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              key={booking._id}
              className="flex gap-4 bg-gray-100 rounded-2xl overflow-hidden"
            >
              <div className="w-48 h-48">
                <PlaceImg place={bookings.place} />
              </div>
              <div className="py-2 pr-3 grow">
                {/* <h2 className="text-xl">{booking.place.title}</h2> */}
                <BookingDate booking={booking} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
