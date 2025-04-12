import React,{memo} from 'react'

function Count({text,count}) {
  console.log(text,' rendered');

  return (
    <>
    <h2>Count - {text} - {count}</h2>
    
    </>
  )
}

export default memo(Count)