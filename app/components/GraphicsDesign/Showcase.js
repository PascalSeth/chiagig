"use client"
import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'

export default function Showcase() {
    const [text,count]=useTypewriter({
        words:[
            "Graphic Design"
        ],
        delaySpeed:8000,  
    })
    return (
      <div className='w-[100%] overflow-x-hidden flex flex-col items-center h-fit'>
          <div className='showcasepic justify-center overflow-hidden text-center w-[100%] p-[5vh] rounded-2xl h-[fit] max-lg:h-[20vh] flex flex-col items-center text '>
                  <div className='flex items-center'>      
                  <h1 className='text-7xl max-lg:text-5xl  max-md:text-4xl tracking-wider text-white  font-bold'>{text}</h1>
             <h1 className='text-1xl max-lg:text-lg max-md:text-base font-thin'><Cursor/></h1>     </div>
  
          </div>
      </div>
    )
}
