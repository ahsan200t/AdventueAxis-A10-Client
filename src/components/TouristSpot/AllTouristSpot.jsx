import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../AllTouristSpotsCard/AllTouristSpotsCard";

const AllTouristSpot = () => {
    const allTouristSpot=useLoaderData()
    return (
        <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                allTouristSpot.map(spot=><AllTouristSpotsCard
                key={spot._id}
                spot={spot}
                ></AllTouristSpotsCard>)
            }
        </div>
    );
};

export default AllTouristSpot;