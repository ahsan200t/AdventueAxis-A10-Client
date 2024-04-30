import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../AllTouristSpotsCard/AllTouristSpotsCard";
import { Fade } from "react-awesome-reveal";
import { TiArrowSortedDown } from "react-icons/ti";
const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData();
  return (
    <div>
      <div className="text-right">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xs  text-white bg-secondary m-1"
          >
            Sort By
            <TiArrowSortedDown />
          </div>
          <select
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <option>
              average_cost
            </option>
          </select>
        </div>
      </div>
      <Fade delay={500}>
        <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allTouristSpot.map((spot) => (
            <AllTouristSpotsCard
              key={spot._id}
              spot={spot}
            ></AllTouristSpotsCard>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default AllTouristSpot;
