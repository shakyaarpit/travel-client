import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchDestination = () => {
  let [data, setData] = useState();

  async function fetchApi() {
    let res = await axios.get("https://travel-api-v5co.onrender.com/destination");
    setData(res.data);
    
  }


 

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
  
     <select defaultValue="Pick a color" className="select">
  <option
 onClick={()=>
data ?  data.filter((e)=>(
e.tripType == "Holy_pilgrimage"
)):""
 }

 
   >Holi Pligimage</option>
  <option >tample</option>
  <option>hills</option>

</select>
       


    </>
  );
};

export default SearchDestination;
