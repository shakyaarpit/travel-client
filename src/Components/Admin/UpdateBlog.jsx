import axios from "axios";
import React, {  useEffect, useState } from "react";
import {  NavLink, useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  let {id} = useParams()
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

  let fetchApi = async()=>{
  let res = await axios.get("https://travel-api-v5co.onrender.com/getUser/"+id)
 setForm(res.data);
 }

useEffect(()=>{
  fetchApi()
},[])

  let navigate = useNavigate();

  let handlerForm = async (e) => {
    e.preventDefault();
    let res = await axios.put("https://travel-api-v5co.onrender.com/blog/updateBlog/"+id,form);
    if(res.data == "updated"){
      alert("updated successfully")
      navigate("/blogInAdmin");
    }
 
  };

  return (
    <div>
      <NavLink to={'/admin'}>

    <button className='btn border-amber-500 hover:bg-amber-500 m-4'>back</button>
    </NavLink>
      <div className="  flex justify-center items-center h-[80vh]">
        <form onSubmit={handlerForm}>
          <h1 className="text-2xl text-amber-500 font-bold mb-6">Add New Blog</h1>
          <label className="label">Image : </label>
          <input
            required
            type="url"
            className="input border-amber-500"
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
            type="text"
            placeholder="write here in details"
            className=" textarea border-amber-500"
            name="detail"
            value={form.detail}
            onChange={changeHandler}
          ></textarea>
          <br />
          <br />
          <button type="submit" className="btn border-amber-500 hover:bg-amber-500  mt-4">
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
