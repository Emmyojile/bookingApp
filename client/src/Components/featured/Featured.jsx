import useFetch from "../../hooks/useFetch";
import "./featured.css";

export const Featured = () => {

    const {data, loading, error} = useFetch(`hotel/countByCity?cities=Madrid,atlanta,Barcelona`)

  return (
    <div className="featured">
        {loading ? (
            "Loading please wait..."
        ) : (

            <> <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[0]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Atlanta</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Barcelona</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div>
            
        </>)}
    </div>
    )
}
