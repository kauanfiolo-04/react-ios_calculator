export  function Button(props){
  return(
    <button 
      className='mx-1 w-[60%] text-white border border-white'
    >{props.name}</button>
  )
}