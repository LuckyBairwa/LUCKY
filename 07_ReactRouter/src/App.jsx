import { useState } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4'>React Router</h1>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
