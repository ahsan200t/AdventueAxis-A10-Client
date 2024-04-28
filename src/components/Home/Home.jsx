import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SpotCard from "../spotCard/SpotCard";
import Country from "../Country/Country";

const Home = () => {
  const allSpot = useLoaderData();
  const allCountry=useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <div className="text-center font-bold text-4xl mt-16">
      <h1 className="divider mb-10 font-serif">Tourists Spots</h1>
      </div>
      <div className=" grid grid-cols-3 gap-4 font-serif">
    
      {
        allSpot.map(spot=><SpotCard
        key={spot._id}
        spot={spot}
        ></SpotCard>)
       }
      </div>
      <div>
      <h1 className="divider mb-10 font-serif text-center font-bold text-4xl mt-16">Countries</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
          allCountry.map(singlecountry=><Country key={singlecountry._id}
          singlecountry={singlecountry}
          ></Country>)
        }
      </div>
      </div>
    </div>
  );
};

export default Home;
