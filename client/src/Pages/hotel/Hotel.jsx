import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navBar/Navbar";
import "./hotel.css";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../Components/reserve/Reserve";

export const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotel/singleHotel/${id}`);

  const {user } = useContext(AuthContext)
  const navigate = useNavigate();

  const {dates, options} = useContext(SearchContext);

  const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
    return diffDays;
  }

  console.log("dates:", dates);
  const days = dayDifference(dates[0].endDate, dates[0].startDate);


  const handleOpenSlide = (i) => {
    setSlideNumber(i);
    setOpenSlide(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else{
      navigate("/")
    }
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading..."
      ) : (
        <div className="hotelContainer">
          {openSlide && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpenSlide(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("left")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("right")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent Location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighLight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpenSlide(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect For a {days}-night stay</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>)}
        {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  );
};
