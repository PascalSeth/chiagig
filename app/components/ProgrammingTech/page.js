import React from 'react'
import Showcase from './Showcase'
import Concepts from './Concepts'

export default function ProgrammingTech() {
  return (
    <div className='flex flex-col w-full px-[8vw] py-[3vh]'>
      <div className=''>
        <Showcase/>
        </div>
        <div>
            <Concepts/>
        </div>

    </div>
  )
}
