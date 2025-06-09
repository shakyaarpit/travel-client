import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Filter = () => {
  let [data, setData] = useState();

let [typeData , setTypeData] = useState("temple")

  async function fetchApi() {
    let res = await axios.get("https://travel-api-v5co.onrender.com/destination");
    setData(res.data);
  }

  let setFilter = 
    data?.filter((e)=>e.tripType == typeData)

  let changetample = ()=>{
    setTypeData("temple")
  }
  let changeHill = ()=>{
    setTypeData("hills")
  }
  let changeHoly = ()=>{
    setTypeData("Holy_pilgrimage")
  }
  let changeOther = () =>{
    setTypeData("other")
  }
  // const setFilter = data?.filter((e)=>e.tripType === "tample")
  // const setFilter = data?.filter((e)=>e.tripType === "hills")
  // const setFilter = data?.filter((e)=>e.tripType === "Holy_pilgrimage")
  
     

//  fetchApi()

  useEffect(() => {
    fetchApi();
  }, [typeData]);
  // console.log(setFilter);
  return (
    <div>
      <>
      <div className=" capitalize mt-4 flex justify-around lg:justify-center lg:gap-6 lg:ml-6  items-center">
<button className="btn border-amber-500"  onClick={changetample}>Temple</button>
      <button className="btn border-amber-500"  onClick={changeHill}>Hills</button>
      <button className="btn border-amber-500"  onClick={changeHoly}>Holy_pilgrimage</button>
      <button className="btn border-amber-500"  onClick={changeOther}>Other</button>
      </div>
      
       

        <div className="flex capitalize justify-start flex-wrap gap-4 mt-4 mb-4 pl-2 pr-2 ">
          {setFilter?.map((allplace, key) => (
            <div
              key={key}
              className="card border p-2 bg-base-100 w-96 shadow-sm"
            >
              <figure className="w-full rounded-[10px] h-[200px]">
                <img src={allplace.img} alt="mix" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  <span className=" text-amber-500 p-2 rounded-[10px]">
                    Trip_Type
                  </span>{" "}
                  : {allplace.tripType}{" "}
                </h2>
                <h2 className="card-title">
                  {" "}
                  <span className=" text-amber-500 p-2 rounded-[10px]">
                    Vehicle
                  </span>{" "}
                  : {allplace.vehicle}{" "}
                </h2>
                <h2 className="card-title">
                  <span className=" text-amber-500 p-2 rounded-[10px]">
                    Pickup From
                  </span>{" "}
                  : {allplace.from}{" "}
                </h2>
                <h2 className="card-title">
                  <span className=" text-amber-500 p-2 rounded-[10px]">
                    Destination
                  </span>{" "}
                  : {allplace.to}{" "}
                </h2>
                <h2 className="card-title">
                  <span className=" text-amber-500 p-2 rounded-[10px]">
                    Duration
                  </span>{" "}
                  : {allplace.day} Days{" "}
                </h2>

                <h2 className="card-title">
                  <span className=" text-amber-500 p-2 rounded-[10px]">
                    Price
                  </span>{" "}
                  : {allplace.price}{" "} per person
                </h2>

                <p>
                  <span className="card-title">
                    {" "}
                    <span className=" text-amber-500 p-2 rounded-[10px]">
                      Check In Details
                    </span>{" "}
                    :{" "}
                  </span>
                  {allplace.detail}
                </p>
                <div className="card-actions justify-end">
                  <NavLink to={"/userDetail"}>
                    <button className="btn border-amber-500 hover:bg-amber-500 ">
                      Book Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Filter;
