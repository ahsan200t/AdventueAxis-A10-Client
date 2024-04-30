import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);
  const [spots,setSpots]=useState(myData)
  useEffect(() => {
    fetch(`https://tourism-management-server-beta.vercel.app/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user]);
  return (
    <div>
      {
        myData.map(data=><MyListCard 
        key={data._id}
        data={data}
        spots={spots}
        setSpots={setSpots}
        ></MyListCard>)
      }
    </div>
  );
};

export default MyList;
