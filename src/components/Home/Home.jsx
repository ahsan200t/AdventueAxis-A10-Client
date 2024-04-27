import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SpotCard from "../spotCard/SpotCard";

const Home = () => {
  const allSpot = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mt-12 grid grid-cols-3 gap-4">
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
