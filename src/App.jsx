import { useState } from 'react'
import React from 'react'

const App = () => {
  let [num , setNum] = useState(0)
  return (
    <>
     <h1>Counter-App</h1>
     <h2>{num}</h2>
     <button onClick={addNum => setNum(num + 1)}>+</button>
     <button onClick={subtractNum => setNum(num - 1)}>-</button>
     <button onClick={resetNum => setNum(0)}>Reset</button>
    </>
    
  )
}

export default App