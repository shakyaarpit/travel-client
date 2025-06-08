import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { data, useNavigate, useParams } from 'react-router-dom';
import { handleSuccess } from '../utils';

const BookingUpdate = () => {
     let {id} = useParams()
      let [form, setForm] = useState({
        from: "",
        to: "",
        day: "",
      });
    
      let changeHandler = (event) => {
        setForm((currData) => {
          return { ...currData, [event.target.name]: event.target.value };
        });
      };
    
      let fetchApi = async()=>{
      let res = await axios.get("https://travel-api-v5co.onrender.com/getBooking/"+id)
     setForm(res.data);
    // console.log(res);
     }
    
    useEffect(()=>{
      fetchApi()
    },[])
    
      let navigate = useNavigate();
    
      let handlerForm = async (e) => {
        e.preventDefault();
        let res = await axios.patch("https://travel-api-v5co.onrender.com/bookingUpdate/"+id,form);
        if(res.data == "updated"){
          handleSuccess("updated successfully")
          setTimeout(()=>{
            
            navigate("/booking");
          },4000)
        }
     
      };
  return (
    <div>
        {
            data ? (
<div className=" capitalize flex justify-center items-center h-[80vh]">
        <form onSubmit={handlerForm}>
          <h1 className="text-2xl text-amber-500 font-black  mb-6">Update Booking Detail</h1>
          <label className="label">Pickup From : </label>
          <input
            required
            type="text"
            className="input border-amber-500"
            placeholder="enter pickup location"
            name="from"
            value={form.from}
            onChange={changeHandler}
          />
          <br />
          <br />

          <label className="label">Destination : </label>
          <input
            required
            type="text"
            className="input border-amber-500"
            placeholder="enter title name"
            name="to"
            value={form.to}
            onChange={changeHandler}
          />
          <br />
          <br />
           <label className="label">Days : </label>
          <input
            required
            type="text"
            className="input border-amber-500"
            placeholder="enter title name"
            name="day"
            value={form.day}
            onChange={changeHandler}
          />
          <br />
          <br />
          <button type="submit" className="btn border-amber-500 hover:bg-amber-500  mt-4">
            Update
          </button>
        </form>
      </div>
            ):""
        }
      
    </div>
  )
}

export default BookingUpdate