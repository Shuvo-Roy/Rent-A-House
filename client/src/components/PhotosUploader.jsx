import React from 'react'
import axios from 'axios'
import { AiOutlineCloudUpload} from "react-icons/ai";
import { BsStar, BsStarFill, BsTrash} from "react-icons/bs";
export default function PhotosUploader({addedPhotos,onChange}) {

    
  
    function uploadPhoto(e) {
      const files = e.target.files;
      const data = new FormData();
      for (let i = 0; i < files.length; i++) {
        data.append('photos', files[i]); // Append each file to FormData
      }
      axios
        .post('/upload', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(response => {
          const { data: filenames } = response;
          onChange(prev => [...prev, ...filenames]);
        })
        .catch(error => {
          console.error('Error uploading photos:', error);
        });
    }
  function removePhoto(e,fileName){
    e.preventDefault()
    onChange([...addedPhotos.filter(photo=> photo !== fileName)])
  }

  function selectMainPhoto(e,fileName){
    e.preventDefault()
    onChange([fileName,...addedPhotos.filter(photo=> photo !== fileName)])
  }



  return (
    <>
            <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
            {
              addedPhotos.length > 0 && addedPhotos.map(link=>(
                <div className="h-32 flex relative" key={link}>
                <img className="rounded-2xl w-full object-cover" src={link} alt=""/>
                  <button onClick={(e)=>removePhoto(e,link)} className="absolute bottom-1 right-1 text-red-500 bg-gray-50 p-2 bg-opacity-50 rounded-xl cursor-pointer">
                  <BsTrash/>
                  </button>
                  <button onClick={(e)=>selectMainPhoto(e,link)} className="absolute bottom-1 left-1 text-red-500 bg-gray-50  p-2 bg-opacity-50 rounded-xl cursor-pointer">
                  {link === addedPhotos[0] && (
                    <BsStarFill/>
                  )}
                  {link !== addedPhotos[0] && (
                    <BsStar/>
                  )}
                  
                  </button>
                </div>
              ))
            }
                <label className="h-32 flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer">
                <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
                <AiOutlineCloudUpload className="w-8 h-8"/>
                Upload</label>
            </div>
    </>
  )
}



