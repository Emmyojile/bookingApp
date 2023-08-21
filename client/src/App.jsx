import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import Layout from "../src/Layouts/main"
import {List}  from './Pages/List'
import {Home} from './Pages/Home'
import { Hotel } from './Pages/Hotel'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element ={<Layout showHeaderElements={true}/>}>
        <Route index element={<Home />}/>
        <Route path='/hotels' element={<List showHeaderElements={false} isInList={true}/>}/>
        <Route path='/hotels/:id' element={<Hotel showHeaderElements={true} />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
