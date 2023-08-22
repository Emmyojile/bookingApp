import { Featured } from "../../Components/featured/Featured"
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header"
import MailList from "../../Components/mailList/MailList";
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
      <h1 className="homeTitle">Home Guests Love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
  </div>
  )
}
