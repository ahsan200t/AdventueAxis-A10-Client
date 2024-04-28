
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const AddTouristSpot = () => {
  const {user}=useContext(AuthContext)
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const email = form.email.value;
    const user = form.user.value;
    const photo = form.photo.value;


    const newSpot = {
      name,
      country,
      location,
      description,
      cost,
      season,
      time,
      visitors,
      email,
      user,
      photo,
    };
    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Added",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset()
        }
      });
  };

  return (
    <div className="bg-gray-300 border border-emerald-700 p-4 m-4 md:p-24 rounded-3xl">
      <h1 className="text-3xl font-extrabold text-center mb-8 font-serif">
        Add Tourist Spot
      </h1>
      <form onSubmit={handleAddSpot}>
        {/* Country Name and Spot Name */}
        <div className="md:flex ">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                Country Name  
              </span>
            </label>
            <input
              type="text"
              placeholder="Country Name"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="country" 
            />
            
          </div>
          <div className="form-control w-full md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
               Tourists Spot Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Tourists Spot Name"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="name"
            />
          </div>
        </div>
        {/* Location and Description */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">Location</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="location"
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Short Description
              </span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="description"
            />
          </div>
        </div>
        {/* form Cost and Season row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                Average Cost
              </span>
            </label>
            <input
              type="text"
              placeholder="Average Cost"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="cost"
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Seasonality
              </span>
            </label>
            <input
              type="text"
              placeholder="Seasonality"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="season"
            />
          </div>
        </div>
        {/* form Time and total Visitors row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                Travel Time
              </span>
            </label>
            <input
              type="text"
              placeholder="Travel Time ---Days"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="time"
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Total Visitors Per Year
              </span>
            </label>
            <input
              type="text"
              placeholder="Total Visitors Per Year"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="visitors"
            />
          </div>
        </div>
        {/* form User Email and User Name row */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                User Email
              </span>
            </label>
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="email"
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                User Name
              </span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="user"
              defaultValue={user?.displayName}
            />
          </div>
        </div>
        {/* form Photo url row */}
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text card-title font-serif">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="photo"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Now"
          className="btn btn-block font-bold mt-4 bg-emerald-700 text-white font-serif"
        />
      </form>
    </div>
  );
};

export default AddTouristSpot;
