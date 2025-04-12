import React,{memo} from 'react'

function Title() {
  console.log('title rendered');

  return (
    <>
    
    <h1>USECALLBACK Hook</h1>
    </>
  )
}

export default memo(Title)