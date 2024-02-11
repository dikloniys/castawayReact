import React from 'react'
import {imgWay} from "../static/data/data";

interface IProps {
    
        src: string,
        alt: string
    
}

export default function ImageUI({src, alt}:IProps) {
  return (
    <>
        <img src={src} alt={alt}/>
    </>
  )
}
