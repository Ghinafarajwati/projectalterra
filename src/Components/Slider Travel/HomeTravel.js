import React from 'react'
import { dataImg } from "./DataTravel"
import "./HomeTravel.css"

export default function HomeTravel() {
  return (
    <>
        <div className='picsTrav'>
        {dataImg.map((item, key) => {
            return (
            <div className='travImg rounded shadow-lg mx-3 my-3 overflow-hidden' key={key}>
            <img src={item.imgSrc} alt="" className='drop-shadow-md'></img>
            <div className="p-3">
            <div className="travtitle text-sm text-center font-bold text-white">{item.title}</div>
            </div>
            </div>
            )
        })}
        </div>
    </>
  )
}