import React from 'react'

export default function PlaceImg({places,index=0,className=null}) {
 
    if(!places || !places.photos || places.photos.length === 0) {
        return '';
      }

      if(!className){
        className=' object-cover'
      }
     
      return <img className={className} src={places.photos[index]} alt=""/>
}
