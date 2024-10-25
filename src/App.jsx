import { useState } from 'react'
import Employee from './components/employeeform/Employee';
import Header from './components/header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Employee/>
    </>
  )
}

export default App
