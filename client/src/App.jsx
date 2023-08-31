import { useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import {List}  from './Pages/list/List'
import {Home} from './Pages/home/Home'
import { Hotel } from './Pages/hotel/Hotel'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_LOCAL_URL;
axios.defaults.withCredentials = true

function App() {
  return (
    <>
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path= "/hotels" element={<List/>} />
          <Route path= "/hotel/:id" element={<Hotel/>} />
        </Routes>
    </>
  )
}

export default App
