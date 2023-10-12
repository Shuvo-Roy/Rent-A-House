import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../components/Image.jsx";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("place/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div className="m-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12">
      {places.length > 0 &&
        places.map((place) => (
          <Link
            to={`/place/${place._id}?userId=${place.owner}`}
            key={place._id}
            className="bg-slate-100"
          >
            <div className="flex flex-col m-4 rounded-xl">
              <div className="flex items-center justify-center">
                {place.photos?.[0] && (
                  <Image
                    className="rounded-xl object-cover aspect-square h-32 w-32"
                    src={place.photos[0]}
                    alt=""
                  />
                )}
              </div>

              <div className="mt-1">
                <h2 className="font-bold">{place.address}</h2>
                <h3 className="text-sm">{place.title}</h3>
                <span className="font-bold">${place.price} per night</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
