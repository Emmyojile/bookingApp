import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from Center</span>
            <span className="siTaxiOp">Free Airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">Entire studio - 1 bathroom - 21m 1full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You Can cancel later so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes Taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem