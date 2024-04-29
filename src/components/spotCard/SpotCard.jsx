import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SpotCard = ({ spot }) => {

  const {
    _id,
     name,
    country,
    location,
    description,
    photo,}=spot;
    console.log(spot)
  return (
    <div>
      <div className="card card-compact border border-emerald-700 bg-base-100 shadow h-[400px]">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body bg-gray-300 rounded-b-2xl">
          <h2 className="font-bold font-serif text-secondary">{name}</h2>
          <h4 className="font-semibold font-serif">{country}</h4>
          <h3 className="font-medium font-serif">{location}</h3>
          <p className="font-serif">{description.slice(0,110)}....</p>
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

export default SpotCard;
