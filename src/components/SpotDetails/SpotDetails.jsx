import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const details = useLoaderData();
  const {
     name,
    country,
    location,
    description,
    cost,
    season,
    time,
    visitors,
    photo,}=details;

  return (
    <div className="font-serif">
       
      <div className="grid grid-cols-1 p-3 lg:grid-cols-2 gap-8 mb-8 border border-emerald-700 shadow rounded-3xl lg:p-2">
        <div>
          <img className="rounded-3xl h-full" src={photo} alt="" />
        </div>
        <div className="space-y-1]">
        <h1 className="font-bold mt-2 mb-3 bg-gray-300 rounded-lg text-center">
            Location
          </h1>
          <h1>
            <span className="text-xl font-bold text-secondary">{location}</span>
          </h1>
          <p>
            <span className="font-semibold">Country: {country}</span>
          </p>
          <p className="font-semibold">
            Status: <span className="">{name}</span>
          </p>
          <p className="font-semibold">
            Visitors: <span className="">{visitors} (per year)</span>
          </p>

          <h1 className="font-bold mt-2 mb-3 bg-gray-300 rounded-lg text-center">
            Details
          </h1>
          <p className="font-semibold">Duration: {time} (Days)</p>
          <p>
            <span className="font-semibold">Season: {season} </span>
          </p>
          <p>
            <span className="font-semibold">Cost: {cost}$ </span>
          </p>
          <div className="divider font-bold">Description</div>
          <p className="text-gray-700">{description}</p>
         
          <button className="btn bg-emerald-700 text-white my-6 w-full">Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
