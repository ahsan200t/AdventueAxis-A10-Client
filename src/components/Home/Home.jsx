import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SpotCard from "../spotCard/SpotCard";

const Home = () => {
  const allSpot = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="text-center font-bold text-4xl mt-16">
      <h1 className="divider mb-10 font-serif">Tourists Spots</h1>
      </div>
      <div className=" grid grid-cols-3 gap-4">
    
      {
        allSpot.map(spot=><SpotCard
        key={spot._id}
        spot={spot}
        ></SpotCard>)
       }
      </div>
    </div>
  );
};

export default Home;
