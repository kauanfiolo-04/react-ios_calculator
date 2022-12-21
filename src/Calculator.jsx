/* eslint-disable no-eval */
import { useState } from "react"
import { Button } from "./components/Button"

export function Calculator(){
  const[result, setResult]=useState('')

  const handleChange=(e)=>{
    console.log(e)
    setResult(result.concat(e.target.innerText))
  }

  const handleClear=()=>{
    setResult('')
  }

  const handlePercent=()=>{
    setResult((result/100).toString())
  }

  const handleSLA=()=>{
    setResult((result*-1).toString())
  }

  const handleEvaluate=()=>{
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  }


  

  return (
    <div className="container space-y-[25%] md:h-[70%] h-[600px] md:w-[20%] w-[300px]  rounded-md  bg-black my-10
    ">

      <div className='flex justify-end items-end text-white h-[20%] mr-5 text-5xl'>
        <span>{result}</span>
      </div>

      <div className='w-[100%] h-[60%] grid grid-cols-4 space-x-1'>
        <Button value='AC'  type="idk" handleChange={handleClear}/>
        <Button value='+/-' type="idk" handleChange={handleSLA}/>
        <Button value='%'  type="idk" handleChange={handlePercent}/>
        <Button value='/' type="op" handleChange={handleChange}/>
        <Button value='7'  handleChange={handleChange}/>
        <Button value='8'  handleChange={handleChange}/>
        <Button value='9'  handleChange={handleChange}/>
        <Button value='*'  type="op" handleChange={handleChange}/>
        <Button value='4'  handleChange={handleChange}/>
        <Button value='5'  handleChange={handleChange}/>
        <Button value='6'  handleChange={handleChange}/>
        <Button value='-'  type="op" handleChange={handleChange}/>
        <Button value='1'  handleChange={handleChange}/>
        <Button value='2'  handleChange={handleChange}/>
        <Button value='3'  handleChange={handleChange}/>
        <Button value='+'  type="op" handleChange={handleChange}/>
        <Button value='0'  handleChange={handleChange}/>
        <Button value=','  handleChange={handleChange}/>
        <Button value='='  type="op" handleChange={handleEvaluate}/>
      </div>

    </div>


  )
}