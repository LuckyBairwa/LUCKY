import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 5;
  let addvalue= ()=>{
    if (counter>=20){
      alert('This is more then 20')
    }
    else{
      // setCounter(counter +1 ) ;
      setCounter((prevCount)=> prevCount+1);
      setCounter((prevCount)=> prevCount+1);
      setCounter((prevCount)=> prevCount+1);
    }
  }

  const removeValue= ()=>{
    if(counter>0){
      // setCounter(counter-1)
      setCounter((prevCount)=> prevCount -1 );
      setCounter((prevCount)=> prevCount -1 );
      setCounter((prevCount)=> prevCount -1 );
    }else{
      alert('No more!')
    }
  }
  return (
    <>
      <h1>Lucky Bairwa</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
