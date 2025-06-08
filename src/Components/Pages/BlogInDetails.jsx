import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const BlogInDetails = () => {
  let { id } = useParams();
  let [detail, setDetail] = useState();

  async function fetchById() {
    let res = await axios.get("https://travel-api-v5co.onrender.com/blog/blogInDetail/" + id);
    setDetail(res.data);
  }
  useEffect(() => {
    fetchById();
  }, [id]);


  return (
    <>
    <NavLink to={"/blog"}>
      <button className="ml-3 mt-4 btn border-amber-500 hover:bg-amber-500">back</button>
      </NavLink>
    <div className="lg:min-h-[70vh] pt-6 pb-6">
      
      {detail ? (
        <div className="card mt-4  capitalize bg-base-100 shadow-sm">
          <figure className="">
            <img
              className="w-full h-[250px] max-w-xl rounded-lg "
              src={detail.img}
              alt="Album"
            />
          </figure>
          <div className=" card-body flex flex-col justify-center items-center">
            <h2 className="text-2xl text-amber-500 font-bold underline">{detail.title}</h2>
            <p className="text-[20px]">{detail.detail}</p>
          </div>
        </div>
      ) : (
         <>
          <div className="flex justify-center items-center w-full h-full  ">
<span className="loading loading-spinner loading-xs"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-lg"></span>
<span className="loading loading-spinner loading-xl"></span>
</div>
          </>
      )}
      
    </div>
    </>
  );
};

export default BlogInDetails;
