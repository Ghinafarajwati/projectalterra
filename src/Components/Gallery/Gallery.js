import React from 'react'
import { dataBaru } from "./DataGallery"
import "./Gallery.css"

export default function Gallery() {
  return (
    <>
        <div className='picsGallery'>
        {dataBaru.map((item, idx) => {
            return (
            <div className='pics' key={idx}>
            <img src={item.imgSrc} alt=""></img>
            </div>
            )
        })}
        </div>
    </>
  )
}