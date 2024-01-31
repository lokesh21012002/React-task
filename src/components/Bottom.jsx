import React from 'react'
import "./style.css"

const Bottom = ({output}) => {
  return (
    <div className='common'>
       <div className='m'>
        <h1>Output</h1>
       </div>
       <div>

        {output}
       </div>
    </div>
  )
}

export default Bottom