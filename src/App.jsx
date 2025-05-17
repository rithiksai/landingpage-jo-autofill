import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className="text-blue-500">Blue text test</p>
      <p className="text-[#3b82f6]">Blue text with arbitrary value</p>
      <p style={{color: 'blue'}}>Blue text with inline style</p>
    </div>
  )
}

export default App
