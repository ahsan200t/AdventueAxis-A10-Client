import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../AllTouristSpotsCard/AllTouristSpotsCard";
import { Fade } from "react-awesome-reveal";

const AllTouristSpot = () => {
    const allTouristSpot=useLoaderData()
    return (
        <div>
            <Fade delay={500}>
            <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                allTouristSpot.map(spot=><AllTouristSpotsCard
                key={spot._id}
                spot={spot}
                ></AllTouristSpotsCard>)
            }
        </div>
            </Fade>
        </div>
    );
};

export default AllTouristSpot;