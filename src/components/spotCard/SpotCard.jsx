import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SpotCard = ({ spot }) => {
  const {
    _id,
     name,
    country,
    location,
    description,
    cost,
    season,
    time,
    visitors,
    email,
    user,
    photo,}=spot;
  return (
    <div>
      <div className="card card-compact border border-emerald-700 bg-base-100 shadow h-[400px]">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold">{location}</h2>
          <h4>{country}</h4>
          <h3>{name}</h3>
          <p>{description.slice(0,110)}</p>
          <div>
            <Link to={`/details/${_id}`}>
              <button className="btn w-full bg-emerald-700 text-white">
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
