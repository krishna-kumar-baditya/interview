import React,{memo} from 'react'

function Button({handleClick,children}) {
  console.log(children,' rendered');

  return (
    <>
    <button type='button' onClick={handleClick}>{children}</button>
    
    </>
  )
}

export default memo(Button)