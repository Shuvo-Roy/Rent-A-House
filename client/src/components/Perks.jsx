import React from 'react'
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { PiTelevisionBold } from "react-icons/pi";
import { MdPets } from "react-icons/md";
import { GiDoorHandle } from "react-icons/gi";
import { BiRadio } from "react-icons/bi";

export default function Perks({selected, onChange}) {
    function handleCbClick(e){
        const {checked,name} = e.target
        if(checked){
            onChange([...selected,name])
        }else{
            onChange([...selected.filter(selectedName=>selectedName !==name)])
        }
    }
  return (
    <>
        <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick}/>
                    <AiOutlineWifi/>
                    <span>Wifi</span>
                </label>
                <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleCbClick}/>
                    <AiFillCar/>
                    <span>Parking</span>
                </label>
                <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleCbClick}/>
                    <PiTelevisionBold/>
                    <span>TV</span>
                </label>
                <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" checked={selected.includes('radio')} name="radio" onChange={handleCbClick}/>
                    <BiRadio/>
                    <span>Radio</span>
                </label>
                <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" checked={selected.includes('pets')} name="pets" onChange={handleCbClick}/>
                    <MdPets/>
                    <span>Pets</span>
                </label>
                <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" checked={selected.includes('etrance')} name="etrance" onChange={handleCbClick}/>
                    <GiDoorHandle/>
                    <span>Private entrance</span>
                </label>
    </>
  )
}
