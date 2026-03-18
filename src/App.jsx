import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>welcome to my react app!</h1>
    <form className="form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name='name'/>
      <button type="submit">Submit</button>
    </form>
   </div>
  )
}

export default App