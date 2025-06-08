import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

const ChangePass = () => {
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

    let res = await axios.post("https://travel-api-v5co.onrender.com/changePass", form);
    console.log(res);
    if (res.data === null) {
      handleError("plz enter right email");
    } else {
      handleSuccess("password change successfully");
      navigate("/login");
    }
  };
  return (
    <div className="  flex justify-center items-center h-[80vh]">
      <form onSubmit={handlerForm}>
        <fieldset className="fieldset bg-base-200  rounded-box w-xs border p-4 ">
          <legend className="fieldset-legend  text-2xl ">
            Change Password
          </legend>

          <label className="label">Email</label>
          <input
            required
            type="email"
            className="input border-amber-500"
            placeholder="enter email"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />

          <label className="label">New_Password</label>
          <input
            required
            type="password"
            className="input border-amber-500"
            placeholder="enter new password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />

          <button
            type="submit"
            className="btn border-amber-500 hover:bg-amber-500  mt-4"
          >
            Change password
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ChangePass;
