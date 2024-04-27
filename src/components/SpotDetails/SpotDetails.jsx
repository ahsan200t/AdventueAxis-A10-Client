import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const details = useLoaderData();
  console.log(details)

  

  return (
    <div>
       
      <div className="grid grid-cols-1 p-3 lg:grid-cols-2 gap-8 mb-8 border rounded-3xl lg:p-2">
        <div>
          <img className="rounded-3xl h-full" src={details.photo} alt="" />
        </div>
        <div className="space-y-1]">
          <h1>
            <span className="text-xl font-bold"></span>{" "}
            <span className="bg-secondary text-white p-1 rounded-2xl">New</span>
          </h1>
          <p>
            <span className="font-semibold">Location: </span>
          </p>
          <p className="font-semibold">
            Status: <span className="text-secondary text-xl"></span>
          </p>
          <p>
            <span className="font-semibold">Area: </span>
          </p>
          <h1 className="font-bold mt-2 bg-gray-100 rounded-lg text-center">
            Details
          </h1>
          <p></p>
          <button className="btn btn-secondary my-6 w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
