import { Button } from "./components/Button"
import { useState } from "react"

export function Calculator(){
  

  return (
    <div className="container space-y-[25%] h-[75%] min-h-[400px] w-[25%] min-w-[300px] rounded-md  bg-black my-10">

      <div className='flex justify-end items-end text-white h-[20%] mr-5 text-5xl '>
        <span>0</span>
      </div>

      <div className='w-[100%] h-[60%] grid grid-cols-4' >
        <Button name='AC' type="idk"/>
        <Button name='+/-' type="idk"/>
        <Button name='%'  type="idk"/>
        <Button name='/'  type="op"/>
        <Button name='7'  />
        <Button name='8'  />
        <Button name='9'  />
        <Button name='x'  type="op"/>
        <Button name='4'  />
        <Button name='5'  />
        <Button name='6'  />
        <Button name='-'  type="op"/>
        <Button name='1'  />
        <Button name='2'  />
        <Button name='3'  />
        <Button name='+'  type="op"/>
        <Button name='0'  />
        <Button name=','  />
        <Button name='='  type="op"/>
      </div>

    </div>


  )
}