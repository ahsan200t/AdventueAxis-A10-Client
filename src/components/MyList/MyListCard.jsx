import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MyListCard = ({ data, spots, setSpots }) => {
  const { _id, name, country, cost, time, photo } = data;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete Confirm");
        //
        fetch(`http://localhost:5000/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Data has been deleted.",
                icon: "success",
              });
            }
            const remaining = spots.filter((spot) => spot._id !== _id);
            setSpots(remaining);
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto border border-emerald-700 mb-4 rounded-md">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-200 text-black font-serif">
            <tr>
              <th>Spot Name</th>
              <th>Country Name</th>
              <th>Average Cost</th>
              <th>Travel Time</th>
              <th>Image</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-secondary font-serif">{name}</td>
              <td>{country}</td>
              <td>{cost} $</td>
              <td>{time} days</td>
              <td>
                <img className="w-16" src={photo} alt="" />
              </td>
              <td>
                <Link to={`/update/${_id}`}>
                  <button className="btn bg-emerald-700 btn-sm text-white">
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-emerald-700 btn-sm text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListCard;
