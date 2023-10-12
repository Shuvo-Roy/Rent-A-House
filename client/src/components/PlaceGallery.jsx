import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";

export default function PlaceGallery({ place }) {
  const [showPhotos, setShowPhotos] = useState(false);

  if (showPhotos) {
    return (
      <div className="absolute inset-0 bg-white min-h-screen">
        <div className="p-8 grid gap-4">
          <div>
            <h2 className="text-3xl mr-34">Photos of {place.title}</h2>
            <button
              onClick={() => setShowPhotos(false)}
              className="fixed flex gap-1 py-2 px-4 rounded-xl text-red-500 right-12 top-8"
            >
              close
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((link,index) => (
              <div key={index}>
                <img src={link } alt={place.title}/>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
    <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
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



