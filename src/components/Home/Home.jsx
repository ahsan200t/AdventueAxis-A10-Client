import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SpotCard from "../spotCard/SpotCard";
import Country from "../Country/Country";
import { Fade } from "react-awesome-reveal";
import OurPricingPlan from "../OurPricingPlan/OurPricingPlan";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  const allSpot = useLoaderData();
  const allCountry = useLoaderData();
  const spots = allSpot.slice(0, 6);
  return (
    <div>
      <Banner></Banner>
      <div className="text-center font-bold text-4xl mt-16">
        <Fade cascade damping={0.7}>
          {" "}
          <h1 className="divider mb-10 font-serif">Tourists Spots</h1>
        </Fade>
      </div>
      <Fade cascade damping={1} delay={500}>
        {" "}
        <div className=" p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 font-serif">
          {spots.map((spot) => (
            <SpotCard key={spot._id} spot={spot}></SpotCard>
          ))}
        </div>
      </Fade>
      <div>
        <Fade cascade damping={0.7}>
          <h1 className="divider mb-10 font-serif text-center font-bold text-4xl mt-16">
            Countries
          </h1>
        </Fade>
        <Fade cascade damping={1} delay={500}>
          {" "}
          <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {allCountry.map((singlecountry) => (
              <Country
                key={singlecountry._id}
                singlecountry={singlecountry}
              ></Country>
            ))}
          </div>
        </Fade>
      </div>
      <OurPricingPlan></OurPricingPlan>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
