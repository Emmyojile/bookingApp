import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";


const FeaturedProperties = () => {

    const { data, loading, error } = useFetch(`hotel?featured=true&limit=4`);

  return (
    <div className='fp'>
        <div className="fpItem">
            <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">Del Mairo</span>
            <span className="fpCity">Atlanta</span>
            <span className="fpPrice">Starting from $5000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">Del Mairo</span>
            <span className="fpCity">Atlanta</span>
            <span className="fpPrice">Starting from $5000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">Del Mairo</span>
            <span className="fpCity">Atlanta</span>
            <span className="fpPrice">Starting from $5000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">Del Mairo</span>
            <span className="fpCity">Atlanta</span>
            <span className="fpPrice">Starting from $5000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties