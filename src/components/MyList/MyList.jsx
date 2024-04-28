import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
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
        ></MyListCard>)
      }
    </div>
  );
};

export default MyList;
