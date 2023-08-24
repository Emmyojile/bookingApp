import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navBar/Navbar";
import "./hotel.css";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import { useState } from "react";

export const Hotel = () => {

  const [slideNumber, setSlideNumber ] = useState(0);
  const [openSlide, setOpenSlide ] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/3773583/pexels-photo-3773583.png?auto=compress&cs=tinysrgb&w=900&lazy=load",
    },
    {
      src: "https://images.pexels.com/photos/3773579/pexels-photo-3773579.png?auto=compress&cs=tinysrgb&w=900&lazy=load",
    },
    {
      src: "https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=900&lazy=load",
    },
    {
      src: "https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=900&lazy=load",
    },
    {
      src: "https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=900&lazy=load",
    },
    {
      src: "https://images.pexels.com/photos/1714430/pexels-photo-1714430.jpeg?auto=compress&cs=tinysrgb&w=900&lazy=load",
    },
  ];

  const handleOpenSlide = (i) => {
    setSlideNumber(i);
    setOpenSlide(true);
  }
  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    } else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }
   
    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSlide &&
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpenSlide(false)}
            />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("left")} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("right")}/>
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hotel Grande</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Wilston St Park Detroit</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpenSlide(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay In the Heart of New York</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect For a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

