import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import Layout from "../src/Layouts/main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
        </Route>
      </Routes>
    </>
  )
}
import { Form } from 'react-router-dom'

export default App
