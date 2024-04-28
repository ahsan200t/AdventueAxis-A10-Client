import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Country = ({ singlecountry }) => {
  // eslint-disable-next-line react/prop-types
  const { photo, country, description } = singlecountry;
  return (
    <div>
      <Link to=''>
      <div className="card card-compact bg-base-100 shadow border border-emerald-700 h-[400px]">
      <figure>
        <img
          src={photo}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country}</h2>
        <p>{description}</p>
        
      </div>
    </div>
      
      </Link>
    </div>
  );
};

export default Country;