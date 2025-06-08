import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Destination from "./Destination";
import axios from "axios";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import {} from "react";

const UserDetail = () => {
  let newName = localStorage.getItem("logedInUser");
  let updName = newName.charAt(0).toUpperCase() + newName.slice(1);
  let upperName = newName.toUpperCase();
  let lowerName = newName.toLowerCase();

  let [form, setForm] = useState({
    name: "",
    mobile_no: "",
    from: "",
    to: "",
    day: "",
    adult: "",
  });

  let changeHandler = (event) => {
    setForm((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };



  let navigate = useNavigate();

  let handlerForm = async (e) => {
    e.preventDefault();
let { name } = form;
    try {
       if (
      name === newName ||
      name === updName ||
      name === upperName ||
      name === lowerName
    ) {
      let res = await axios.post("https://travel-api-v5co.onrender.com/userDetail", form);
      console.log(res);

      if (res.data == "add") {
        handleSuccess("Booking has confirmed");

        setTimeout(() => {
          navigate("/booking");
        }, 4000);
      }
    } else {
      handleError("please enter right name")
    }
    
      
    } catch (error) {
      handleError(error)
    }

    
   
  };
  return (
    <>
      <NavLink to={"/"}>
        <button className="btn border-amber-500 hover:bg-amber-500 m-4">
          back
        </button>
      </NavLink>
      <div className=" min-h-[70vh]">
        <div className="flex justify-center  items-center flex-wrap bg-black p-4 rounded-2xl ">
          <form onSubmit={handlerForm}>
            <h1 className="text-2xl text-amber-500 mb-4">Booking Details</h1>
            <div className=" flex justify-around  items-center capitalize flex-wrap lg:gap-10 w-[100%] ">
              <div className=" flex capitalize lg:flex-row flex-col ">
                <label className="label">Name : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter name"
                  name="name"
                  value={form.name}
                  onChange={changeHandler}
                />
                <label className="label">Mobile_No : </label>
                <input
                  required
                  type="number"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter mobile no"
                  name="mobile_no"
                  value={form.mobile_no}
                  onChange={changeHandler}
                />

                <label className="label">Pickup From : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter pickup location"
                  name="from"
                  value={form.from}
                  onChange={changeHandler}
                />
              </div>

              <div className="flex capitalize lg:flex-row flex-col">
                <label className="label">Destination : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter destination location"
                  name="to"
                  value={form.to}
                  onChange={changeHandler}
                />

                <label className="label">Duration : </label>
                <input
                  required
                  type="number"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter duration"
                  name="day"
                  value={form.day}
                  onChange={changeHandler}
                />
                <label className="label">Adults : </label>
                <input
                  required
                  type="number"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="how many person"
                  name="adult"
                  value={form.adult}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <br />
            <br />
            <button
              type="submit"
              className="btn border-amber-500 hover:bg-amber-500 mb-4"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
