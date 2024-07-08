import { useState } from "react"
import React from 'react'

function App() {
  const [isTrue, setIsTrue] = useState(false);

  function onClick() {
    setIsTrue((value) => !value)
  }

  return (
    <div>
      Foo
      <button onClick={onClick}>Click me</button>
      {isTrue ?       
      <h1>Badman Shepard Travel Award Project Website</h1>
      : <h1>Harresh Travel Award Project Website</h1>}
    </div>
  )
}

export default App
