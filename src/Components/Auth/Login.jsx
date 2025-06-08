import axios from "axios";
import React, {  } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

const Login = () => {
  let [form, setForm] = useState({
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
    let res = await axios.post("https://travel-api-v5co.onrender.com/login", form);
    console.log(res);
    const {jwtToken,newEmail} = res.data
    
    if (res.data.data === "success") {
      handleSuccess("login successfully");
      localStorage.setItem('token',jwtToken)
      localStorage.setItem('logedInUser',newEmail.name)
      localStorage.setItem('email',newEmail.email)
     
      setTimeout(() => {
        navigate("/");
          window.location.href = "/";
      }, 4000);

   

    } else if (res.data == "wrongPass") {
      handleError("plz enter right password");
    } else {
      handleError("invalid user! plz first signin then login");
    }
    console.log(res);
  };

 
  return (
    <div className="  flex justify-center items-center h-[80vh]">
      <form onSubmit={handlerForm}>
        <fieldset className="fieldset bg-base-200  rounded-box w-xs border p-4 ">
          <legend className="fieldset-legend  text-2xl ">Login</legend>

          <label className="label">Email</label>
          <input
            required
            type="email"
            className="input border-amber-500"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />

          <label className="label">Password</label>
          <input
            required
            type="password"
            className="input border-amber-500"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />

          <button type="submit" className="btn border-amber-500 hover:bg-amber-500  mt-4">
            Login
          </button>

          <p>
            {" "}
            <NavLink to={`/changePass`}>
              <button className="text-amber-500  cursor-pointer">Forget Password </button>
            </NavLink>
          </p>

          <p className="">
            if not signin then first signin{" "}
            <NavLink to="/signin">
              {" "}
              <span className="btn border-amber-500 hover:bg-amber-500 mt-2 ml-2  ">Signin</span>
            </NavLink>{" "}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
