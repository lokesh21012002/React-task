import React from 'react'
import "./style.css"

const Mid = () => {

  const firstHandler=(e)=>{
    alert(e.target.innerText)
    console.log(e);

  }
   const secondHandler=(e)=>{
    // alert("")
    alert(e.target.innerText)
    console.log(e);

  }
   const thirdHandler=(e)=>{
    // alert("")
    alert(e.target.innerText)
    console.log(e);

  }
   const fourthHandler=(e)=>{
    // alert("")
    alert(e.target.innerText)
    console.log(e);

  }
   const fifthHandler=(e)=>{
    // alert("")
    alert(e.target.innerText)
    console.log(e);

  }
   const sixthHandler=(e)=>{
    // alert("")
    alert(e.target.innerText)
    console.log(e);

  }
   const seventhHandler=(e)=>{
    // alert("")
    alert(e.target.innerText)
    console.log(e);

  }
   const eightHandler=(e)=>{
    // alert("")
    alert(e.target.innerText)
    console.log(e);

  }

  return (
    <div className='common'> 

    <div className='inner'>

        <button onClick={firstHandler}>First</button>
        <button onClick={secondHandler}>Second</button>
        <button onClick={thirdHandler}>Third</button>
        <button onClick={fourthHandler}>Fourth</button>
        <br/>
        <button onClick={fifthHandler}>Fifth</button>
        <button onClick={sixthHandler}>Sixth</button>
        <button onClick={seventhHandler}>Seventh</button>
        <button onClick={eightHandler}>Eight</button>
    </div>
    </div>
  )
}

export default Mid