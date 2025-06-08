import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";

const AddNewPlace = () => {
  let [form, setForm] = useState({
    img: "",
    vehicle: "",
    from: "",
    to: "",
    day: "",
    price: "",
    detail: "",
    tripType:""
  });

  let changeHandler = (event) => {
    setForm((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let navigate = useNavigate();

  let handlerForm = async (e) => {
    e.preventDefault();
    console.log(form);
    let res = await axios.post("https://travel-api-v5co.onrender.com/addNewPlace", form);
    console.log(res);
    if (res.data == "add") {
      handleSuccess("Add Successfully");
       setTimeout(()=>{

        navigate("/planInAdmin");
      },4000)
     
      setForm({
        img: "",
        vehicle: "",
        from: "",
        to: "",
        day: "",
        price: "",
        detail: "",
      });
    }
  };
  return (
    <>
      <NavLink to={"/admin"}>
        <button className="btn border-amber-500 hover:bg-amber-500 m-4">back</button>
      </NavLink>
      <div className=" min-h-[70vh]">
        <div className="flex justify-center items-center flex-wrap bg-black p-4 rounded-2xl ">
          <form onSubmit={handlerForm}>
            <h1 className="text-2xl text-amber-500 font-bold mb-4">Add New Place</h1>
            <div className="flex justify-start items-center  flex-wrap ">
              <div className="flex justify-center items-center mt-6 flexR ">
                <label className="label">Img : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter url"
                  name="img"
                  value={form.img}
                  onChange={changeHandler}
                />
                <label className="label">Vehicle : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter vehicle"
                  name="vehicle"
                  value={form.vehicle}
                  onChange={changeHandler}
                />

                <label className="label">From : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter from location"
                  name="from"
                  value={form.from}
                  onChange={changeHandler}
                />
                <label className="label">To : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter to location"
                  name="to"
                  value={form.to}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex justify-center items-center flexR mt-6">
                <label className="label">Days : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter days"
                  name="day"
                  value={form.day}
                  onChange={changeHandler}
                />

 <label className="label">Trip_Type : </label>
                <input
                  required
                  type="text"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter Trip_Type"
                  name="tripType"
                  value={form.tripType}
                  onChange={changeHandler}
                />
                <label className="label">Price : </label>
                <input
                  required
                  type="number"
                  className="input border-amber-500 ml-2 mr-2"
                  placeholder="enter price"
                  name="price"
                  value={form.price}
                  onChange={changeHandler}
                />

                <label className="label">Write In Details : </label>
                <textarea
                  required
                  type="text"
                  placeholder="write in details"
                  className=" textarea border-amber-500 ml-2 "
                  name="detail"
                  value={form.detail}
                  onChange={changeHandler}
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <button
              type="submit"
              className="btn border-amber-500 hover:bg-amber-500 mb-4"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewPlace;
