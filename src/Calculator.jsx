import { Button } from "./components/Button"

export function Calculator(){
  return (
    <div className="container h-[75%] min-h-[400px] w-[25%] min-w-[300px] bg-black my-10">

      <div className='flex justify-end text-white h-[20%] items-end mr-5 text-5xl'>
        <span>0</span>
      </div>

      <div>
        <Button name='AC'/>
        <Button name='+/-' />
        <Button name='%' />
        <Button name='/' />
        <Button name='7' />
        <Button name='8' />
        <Button name='9' />
        <Button name='X' />
        <Button name='4' />
        <Button name='5' />
        <Button name='6' />
        <Button name='-' />
        <Button name='1' />
        <Button name='2' />
        <Button name='3' />
        <Button name='+' />
        <Button name='0' />
        <Button name=',' />
        <Button name='=' />
      </div>

    </div>


  )
}