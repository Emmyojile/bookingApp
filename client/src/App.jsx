import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { List } from "./Pages/list/List";
import { Home } from "./Pages/home/Home";
import { Hotel } from "./Pages/hotel/Hotel";
import axios from "axios";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Pages/login/Login";

axios.defaults.baseURL = import.meta.env.VITE_API_LOCAL_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthContextProvider>
        <SearchContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotel/:id" element={<Hotel />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </SearchContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
