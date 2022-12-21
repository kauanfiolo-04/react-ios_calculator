
export  function Button({ value, type='num', handleChange }){
  const number='flex text-white w-[65%] h-[90%] justify-center items-center rounded-full  text-2xl cursor-pointer p-2  bg-[#343434] self-center justify-self-center'

  const operators='flex text-white w-[65%] h-[90%] justify-center items-center rounded-full  text-2xl cursor-pointer p-2  bg-[#FF9F0A] self-center justify-self-center'
  
  const zero='flex text-white col-span-2 w-[80%] h-[90%] justify-center items-center rounded-full text-2xl cursor-pointer p-2  bg-[#343434] self-center justify-self-center'
  
  const IDK='flex text-black w-[65%] h-[90%] justify-center items-center rounded-full text-2xl cursor-pointer p-2  bg-[#A5A5A5] self-center justify-self-center'

  const setType=(t)=>{
    if(value==='0'){return zero} if(t==='idk'){return IDK}
    if(t==='num'){return number} if(t==='op'){return operators}
  }


  return(
    <button 
      className={setType(type)} onClick={handleChange}
    >{value}</button>
  )
}