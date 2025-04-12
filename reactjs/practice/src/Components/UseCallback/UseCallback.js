import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function UseCallback() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(5000)
    const incrementAge = useCallback(()=>{
        setAge(age + 1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])
    console.log('usecallback rendered');
    
  return (
    <>

    <Title/>
    <Count text="age" count={age}/>
    <Button handleClick={incrementAge}>
        Increment Age
    </Button>
    <Count text="salary" count={salary} />
    <Button handleClick={incrementSalary} >
        Increment Salary
    </Button>
    
    </>
  )
}

export default UseCallback