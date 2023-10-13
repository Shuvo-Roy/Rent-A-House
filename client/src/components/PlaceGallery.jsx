import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";

export default function PlaceGallery({ place }) {
  const [showPhotos, setShowPhotos] = useState(false);

  if (showPhotos) {
    return (
      <div className="absolute inset-0 bg-white min-h-screen m-12 p-12">
        <div className="grid gap-4 ">
          <div className="flex flex-row justify-between">
            <h2 className="text-3xl mr-34">{place.title}</h2>
            <button
              onClick={() => setShowPhotos(false)}
              className="px-8 py-2 rounded-sm text-red-600"
            >
              Close
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((link,index) => (
              <div key={index} className="object-cover">
                <img src={link } alt={place.title} className="w-full h-full"/>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
    <div className="grid gap-2 grid-cols-2 rounded-3xl overflow-hidden h-96">
      <div>
        {place.photos?.[0] && (
          <div>
            <img
              onClick={() => setShowPhotos(true)}
              className="aspect-square object-cover cursor-pointer"
              src={place.photos[0]}
              alt={place.title}
            />
          </div>
        )}
      </div>
      <div className="grid gap-2">
        {place.photos?.slice(1, 4).map((link, index) => (
          <div key={index}>
            <img
              onClick={() => setShowPhotos(true)}
              className="aspect-square object-cover relative cursor-pointer"
              src={link}
              alt={place.title}
            />
          </div>
        ))}
      </div>
    </div>
    {place.photos?.length > 4 && (
      <button
        onClick={() => setShowPhotos(true)}
        className="flex gap-1 items-center absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl border-black"
      >
        <LuLayoutDashboard />
        Show more photos
      </button>
    )}
  </div>
  );
}



