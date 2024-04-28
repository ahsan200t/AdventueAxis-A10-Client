import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllTouristSpotsCard = ({spot}) => {
    const {
        _id,
         name,
        cost,
        season,
        time,
        visitors,  
        photo,}=spot;
    return (
        <div>
           <div className="card card-compact border border-emerald-700 bg-base-100 shadow h-[400px]">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body bg-gray-300 rounded-b-2xl">
          <h2 className="font-bold font-serif text-secondary">{name}</h2>
          <h4 className="font-semibold font-serif">Average Cost: {cost}$</h4>
          <h3 className="font-medium font-serif">Total Visitors: {visitors} (per year)</h3>
          <p className="font-serif">Travel Time: {time} (Days)</p>
          <p className="font-serif">Season: {season}</p>
          <div>
            <Link to={`/details/${_id}`}>
              <button className="btn w-full bg-emerald-700 text-white font-serif">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>   
        </div>
    );
};

export default AllTouristSpotsCard;