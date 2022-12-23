import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
const [color,setColor] = useState("");
const [error,setError] = useState(false)
const [list,setList] = useState(new Values("#669eff").all(10))

const handleSubmit = (e) => {
  // console.log("hello")
  e.preventDefault()
  try {
    const colors = new Values(color).all(10)
    setList(colors)
    console.log(colors)
  } catch(err){
    setError(true)
    // console.log(err)
  }
}
  return (
  <>
  <section className='container'>
    <h3>color generator</h3>
    <form action="" onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={color} 
      onChange={(e)=>setColor(e.target.value)} 
      placeholder="#f15025"
      className={`${error?"error":null}`}/>
      <button className="btn" type='submit'>submit</button>
    </form>
  </section>
  <section className="colors">
    {list.map((item,index)=>(
      <SingleColor key={index} {...item} index={index} hex={item.hex} >

      </SingleColor>
    ))}
  </section>
  </>
  )
}

export default App
