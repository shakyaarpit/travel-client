import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
import { handleSuccess, handleWarn } from "../utils";
const Signin = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  let changeHandler = (event) => {
    setForm((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let navigate = useNavigate();

  let handlerForm = async (e) => {
    e.preventDefault();
   let res = await axios.post("https://travel-api-v5co.onrender.com/signin",form)
   console.log(res.data);
   if(res.data == "allready"){
    handleWarn("allready use plz signin different email")
   
   }else {
     handleSuccess("signin successfully")
    navigate("/login");
   }
    
    
  };
  return (
    <div className="  flex justify-center items-center h-[80vh]">
      <form onSubmit={handlerForm}>
        <fieldset className="fieldset bg-base-200  rounded-box w-xs border p-4 ">
          <legend className="fieldset-legend  text-2xl ">Signin</legend>

          <label className="label">Name</label>
          <input
          required
            type="text"
            name="name"
            onChange={changeHandler}
            className="input border-amber-500"
            placeholder="Name"
            value={form.name}
          />

          <label className="label">Email</label>
          <input
          required
            type="email"
            name="email"
            onChange={changeHandler}
            className="input border-amber-500"
            placeholder="Email"
            value={form.email}
          />

          <label className="label">Password</label>
          <input
          required
            type="password"
            name="password"
            onChange={changeHandler}
            className="input border-amber-500"
            placeholder="Password"
            value={form.password}
          />

          <button className="btn border-amber-500 hover:bg-amber-500  mt-4">Signin</button>
          <p>
                      if allready signin then login{" "}
                      <NavLink to="/login">
                        {" "}
                        <span className="btn border-amber-500 hover:bg-amber-500 mt-2 ml-2 ">login</span>
                      </NavLink>{" "}
                    </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
