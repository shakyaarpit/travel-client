import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import Heading from "../Heading";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
const Booking = () => {
  let [data, setData] = useState();

let newName = localStorage.getItem("logedInUser")
 let updName = newName.charAt(0).toUpperCase() + newName.slice(1);
 let upperName = newName.toUpperCase()
 let lowerName = newName.toLowerCase()


  async function fetchApi() {
    let res = await axios.get("https://travel-api-v5co.onrender.com/bookingDetail");
    let result = res.data
    let getOne = result.filter((e)=>e.name === newName || e.name === updName || e.name === upperName || e.name === lowerName)
    if(getOne.length === 0){
      handleError("no record found")
    }
    // console.log(getOne);
    setData(getOne);
  }

  useEffect(() => {
    fetchApi();
  }, []);
let navigate = useNavigate()

  let deleteHandler = async (id)=>{
    // console.log(id);
let res = await axios.delete("https://travel-api-v5co.onrender.com/bookingDelete/"+id)
if(res.data == "delete"){
  handleSuccess("cancel successufully")
  setTimeout(()=>{
window.location.reload()
  navigate("/booking")
  },4000)
  
}
  }
  return (
    <>
    <div className="flex mt-2 gap-2 flex-col    min-h-[75vh] ">
      <Heading head={"Booking Details"}/>
      {data
        ? data.map((allBooking, key) => (
          <>
            <div
              key={key}
              className="flex capitalize   justify-around items-center p-2  "
            >
              <div className="text-[15px]">
                <p>
                  <span className="text-amber-500">Name </span> :{" "}
                  {allBooking.name}{" "}
                </p>
                <p>
                  <span className="text-amber-500">Pickup From</span> :{" "}
                  {allBooking.from}{" "}
                </p>
                <p>
                  {" "}
                  <span className="text-amber-500">Destination</span> :{" "}
                  {allBooking.to}
                </p>
                <p>
                  {" "}
                  <span className="text-amber-500">Duration</span> :{" "}
                  {allBooking.day} days
                </p>
                <p>
                  {" "}
                  <span className="text-amber-500">Adults</span> :{" "}
                  {allBooking.adult}
                </p>
              </div>
              <div className=" flex justify-center flex-wrap items-center gap-4">
                <p className="btn capitalize">
                  Booking Status : <GiConfirmed className="text-green-700 " />
                </p>
                <p>
                  <span className="text-[10px] capitalize p-2 rounded-[10px] bg-amber-500">
                    we will connect you soon
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <NavLink to={`/bookingUpdate/${allBooking._id}`}>
                  <button className=" btn text-amber-500 ">
                    <FaEdit />
                  </button>
                </NavLink>
                <button onClick={()=>deleteHandler(allBooking._id)} className="btn text-amber-500"><TiDelete/></button>
              </div>
            </div>
             <hr className="text-amber-500" />
             </>
          ))
        : <>
          <div className="flex justify-center items-center w-full h-full  ">
<span className="loading loading-spinner loading-xs"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-lg"></span>
<span className="loading loading-spinner loading-xl"></span>
</div>
          </>
        
        }
       
    </div>
   
    </>
  );
};

export default Booking;
