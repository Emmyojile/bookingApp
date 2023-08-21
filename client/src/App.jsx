import { useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import {List}  from './Pages/list/List'
import {Home} from './Pages/home/Home'
import { Hotel } from './Pages/hotel/Hotel'


function App() {
  return (
    <>
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path= "/hotels" element={<List/>} />
          <Route path= "/hotels/:id" element={<Hotel/>} />
        </Routes>
    </>
  )
}

export default App
