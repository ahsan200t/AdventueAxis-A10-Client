import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyList = () => {
    const {user}=useContext(AuthContext)
    const [myData, setMyData]=useState([])
     useEffect(()=>{
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyData(data)
        })
     },[user])
    return (
        <div>
           {
            myData.map(data=> <div key={data._id}>
                <div className="overflow-x-auto">
  <table className="table mb-3">
    {/* head */}
    <thead>
      <tr>
        <th>Spot Name</th>
        <th>Country Name</th>
        <th>Average Cost</th>
        <th>Travel Time</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>{data.name}</td>
        <td>{data.country}</td>
        <td>{data.cost} $</td>
        <td>{data.time} days</td>
        <td><img className="w-16" src={data.photo} alt="" /></td>
        <td><button className="btn bg-emerald-700 btn-sm text-white">Update</button></td>
        <td><button className="btn bg-emerald-700 btn-sm text-white">Delete</button></td>
      </tr>
      
    </tbody>
  </table>
</div>
            </div>)
           }
           
        </div>
    );
};

export default MyList;