import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Heading from "../Heading";
const Blog = () => {
  // let navigate = useNavigate();

  let [data, setData] = useState();

  async function fetchApi() {
    let res = await axios.get("https://travel-api-v5co.onrender.com/blog");
    setData(res.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  // let deleteBlog = async (id) => {
  //   let res = await axios.delete("http://localhost:8080/blog/deleteBlog/" + id);
  //   // console.log(res);
  //   if (res.data == "delete") {
  //     alert("delete successfully");
  //     window.location.reload();
  //     navigate("/blog");
  //   }
  // };
  return (
    <>
      <Heading head={"Travels Blog"} para={"Here you can know all about places in details"} />

    <div className=" flex capitalize lg:justify-start gap-8 p-4 flex-wrap  min-h-[60vh]">
      {data
        ? data.map((newData, key) => (
            <div
              key={key}
              className="  border-2 p-2 mt-4 mb-4 card bg-base-100 w-96 shadow-sm"
            >
              <figure>
                <img src={newData.img} alt="Shoes" className="h-[250px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl text-amber-500">{newData.title}</h2>
                <p>{newData.detail.slice(0,264)}....</p>
                <div className="card-actions justify-end mt-4">
                  <NavLink to={`/blogInDetail/${newData._id}`}>
                    <button className="btn border-amber-500 hover:bg-amber-500"> Read More</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        : <>
          <div className="flex justify-center items-center w-full h-full  ">
<span className="loading loading-spinner loading-xs"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-lg"></span>
<span className="loading loading-spinner loading-xl"></span>
</div>
          </>}
    </div>
    </>
  );
};

export default Blog;
