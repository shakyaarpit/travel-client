import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

const BlogInAdmin = () => {
   let navigate = useNavigate();

  let [data, setData] = useState();

  async function fetchApi() {
    let res = await axios.get("https://travel-api-v5co.onrender.com/blog");
    setData(res.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  let deleteBlog = async (id) => {
    let res = await axios.delete("https://travel-api-v5co.onrender.com/blog/deleteBlog/" + id);
    // console.log(res);
    if (res.data == "delete") {
      handleSuccess("delete successfully");
      
      setTimeout(()=>{
         window.location.reload();

         navigate("/admin");
      },4000)
     
    }
  };
  return (
    <>
    <NavLink to={'/admin'}>

    <button className='btn border-amber-500 hover:bg-amber-500 m-4'>back</button>
    </NavLink>
     <div className=" lg:flex lg:justify-start gap-8 p-4 lg:flex-wrap  min-h-[51vh]">
      
      {data
        ? data.map((newData, key) => (
            <div
              key={key}
              className="  border-2 p-2 mt-4 mb-4 card bg-base-100 w-96 shadow-sm"
            >
              <figure>
                <img src={newData.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{newData.title}</h2>
                <p>{newData.detail}</p>
                <div className="card-actions justify-between mt-4">
                  <button
                    className="btn border-amber-500 hover:bg-amber-500"
                    onClick={() => deleteBlog(newData._id)}
                  >
                    delete
                  </button>

                  <NavLink to={`/updateBlog/${newData._id}`}>
                    <button className="btn border-amber-500 hover:bg-amber-500">edit</button>
                  </NavLink>

               
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
    </>
  )
}

export default BlogInAdmin