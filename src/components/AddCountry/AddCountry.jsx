import Swal from "sweetalert2";

const AddCountry = () => {
  const handleAddCountry = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const country = form.country.value;
    const description = form.description.value;

    const addedCountry={
        photo,
        country,
        description
    };
     fetch('http://localhost:5000/country', {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(addedCountry)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Successfully Added",
              icon: "success",
              confirmButtonText: "Ok",
            });
            form.reset()
          }
     })
    
  };
  return (
    <div>
      <form onSubmit={handleAddCountry}>
        <div className="md:flex ">
          <div className="form-control w-full">
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
        </div>
        <div className="form-control w-full">
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

export default AddCountry;
