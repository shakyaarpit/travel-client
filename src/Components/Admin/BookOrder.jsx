import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { TiDelete } from "react-icons/ti";
const BookOrder = () => {
  let [data, setData] = useState();

  async function fetchApi() {
    let res = await axios.get("https://travel-api-v5co.onrender.com/bookingDetail");
    setData(res.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
let navigate = useNavigate()
    let deleteHandler = async (id)=>{
      // console.log(id);
  let res = await axios.delete("https://travel-api-v5co.onrender.com/bookingDelete/"+id)
  if(res.data == "delete"){
    handleSuccess("delete successufully")
    setTimeout(()=>{
  window.location.reload()
    navigate("/bookOrder")
    },4000)
    
  }
    }

  return (
    <>
      <div className="min-h-[80vh]">
        <NavLink to={"/admin"}>
          <button className="btn border-amber-500 hover:bg-amber-500 m-4">
            back
          </button>
        </NavLink>
        <ul className="list bg-base-300 rounded-box  mb-4">
          {data
            ? data.map((res, key) => (
                <li key={key} className="list-row">
                  <div className="text-6xl  text-amber-500 ">
                    {key + 1}
                  </div>
                  <div>
                    <img
                      className="size-15 rounded-box"
                      src="https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819881.jpg"
                    />
                  </div>
                  <div className="list-col-grow">
                    <div className="text-2xl capitalize">
                      {" "}
                      <span className="text-amber-500">Name</span> : {res.name}
                    </div>
                    <div className=" text-2xl  capitalize font-semibold opacity-60">
                      {" "}
                      <span className="text-amber-500">Mobile_No</span> :{" "}
                      {res.mobile_no}
                    </div>
                    <div className="text-2xl capitalize">
                      {" "}
                      <span className="text-amber-500">pickup from</span> : {res.from}
                    </div>
                    <div className=" text-2xl  capitalize font-semibold opacity-60">
                      {" "}
                      <span className="text-amber-500">destination</span> :{" "}
                      {res.to}
                    </div>
                    <div className=" text-2xl  capitalize font-semibold opacity-60">
                      {" "}
                      <span className="text-amber-500">days</span> :{" "}
                      {res.day}
                    </div>
                    <div className=" text-2xl  capitalize font-semibold opacity-60">
                      {" "}
                      <span className="text-amber-500">Adults</span> :{" "}
                      {res.adult}
                    </div>
                  </div>
                                 <button onClick={()=>deleteHandler(res._id)} className="btn   border-amber-500">Delete</button>
                 
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
};

export default BookOrder;
