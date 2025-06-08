import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  let [form, setForm] = useState({
    img: "",
    title: "",
    detail: "",
  });

  let changeHandler = (event) => {
    setForm((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let navigate = useNavigate();

  let handlerForm = async (e) => {
    e.preventDefault();

    let res = await axios.post("https://travel-api-v5co.onrender.com/createBlog", form);
    console.log(res);
    if (res.data == "success") {
      alert("New Blog Add Successfully");
      navigate("/blogInAdmin");
      setForm({
        img: "",
        title: "",
        detail: "",
      });
    }
  };
  return (
    <>
      <NavLink to={"/admin"}>
        <button className="btn border-amber-500 hover:bg-amber-500 m-4">back</button>
      </NavLink>
      <div className="  flex justify-center items-center min-h-[70vh]">
        <form onSubmit={handlerForm}>
          <h1 className="text-2xl text-amber-500 font-bold  mb-4">Add New Blog</h1>
          <label className="label">Image : </label>
          <input
            required
            type="url"
            className="input  border-amber-500"
            placeholder="enter URL"
            name="img"
            value={form.img}
            onChange={changeHandler}
          />
          <br />
          <br />

          <label className="label">Title : </label>
          <input
            required
            type="text"
            className="input border-amber-500"
            placeholder="enter title name"
            name="title"
            value={form.title}
            onChange={changeHandler}
          />
          <br />
          <br />
          <label className="label">write here in details : </label>
          <textarea
            required
            type="text"
            placeholder="write here in details"
            className=" textarea border-amber-500"
            name="detail"
            value={form.detail}
            onChange={changeHandler}
          ></textarea>
          <br />
          <br />
          <button type="submit" className="btn border-amber-500 hover:bg-amber-500  mb-4">
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
