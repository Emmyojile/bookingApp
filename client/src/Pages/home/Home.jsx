import { Featured } from "../../Components/featured/Featured"
import Header from "../../Components/header/Header"
import Navbar from "../../Components/navBar/Navbar"
import PropertyList from "../../Components/propertyList/PropertyList";
import "./home.css";



export const Home = () => {
  return (
  <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">
        Browse By Property Type
      </h1>
      <PropertyList/>
    </div>
  </div>
  )
}
