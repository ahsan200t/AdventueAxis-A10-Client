import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SpotCard = ({ spot }) => {
  const {_id}=spot;
  return (
    <div>
      <div className="card card-compact border border-emerald-700 bg-base-100 shadow h-[400px]">
        <figure>
          <img src={spot.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spot.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
