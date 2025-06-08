import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";

const PlanInAdmin = () => {
  let [data, setData] = useState();

  async function fetchApi() {
    let res = await axios.get(
      "https://travel-api-v5co.onrender.com/destination"
    );
    setData(res.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  let navigate = useNavigate();
  let deleteHandler = async (id) => {
    let res = await axios.delete(
      "https://travel-api-v5co.onrender.com/deletePlace/" + id
    );
    if (res.data == "delete") {
      handleSuccess("delete successfully");
      setTimeout(() => {
        window.location.reload();

        navigate("/planInAdmin");
      }, 4000);
    }
  };
  return (
    <>
      <NavLink to={"/admin"}>
        <button className="btn border-amber-500 hover:bg-amber-500 m-4">
          back
        </button>
      </NavLink>
      <div className="min-h-[51vh]">
        <div className="flex justify-start flex-wrap gap-4 mt-4 mb-4 pl-2 pr-2 ">
          {data
            ? data.map((allplace, key) => (
                <div
                  key={key}
                  className="card border p-2 bg-base-100 w-96 shadow-sm"
                >
                  <figure className="h-[200px]">
                    <img src={allplace.img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {" "}
                      <span className=" text-amber-500 p-2 rounded-[10px]">
                        Trip_Type
                      </span>{" "}
                      : {allplace.tripType}{" "}
                    </h2>
                    <h2 className="card-title">
                      {" "}
                      <span className=" text-amber-500 p-2 rounded-[10px]">
                        Vehicle
                      </span>{" "}
                      : {allplace.vehicle}{" "}
                    </h2>
                    <h2 className="card-title">
                      <span className=" text-amber-500 p-2 rounded-[10px]">
                        Pickup From
                      </span>{" "}
                      : {allplace.from}{" "}
                    </h2>
                    <h2 className="card-title">
                      <span className=" text-amber-500 p-2 rounded-[10px]">
                        Destination
                      </span>{" "}
                      : {allplace.to}{" "}
                    </h2>
                    <h2 className="card-title">
                      <span className=" text-amber-500 p-2 rounded-[10px]">
                        Duration
                      </span>{" "}
                      : {allplace.day} Days{" "}
                    </h2>

                    <h2 className="card-title">
                      <span className=" text-amber-500 p-2 rounded-[10px]">
                        Price
                      </span>{" "}
                      : {allplace.price}{" "}
                    </h2>

                    <p>
                      <span className="card-title">
                        {" "}
                        <span className=" text-amber-500 p-2 rounded-[10px]">
                          Check In Details
                        </span>{" "}
                        :{" "}
                      </span>
                      {allplace.detail}
                    </p>
                    <div className="card-actions justify-end">
                      <NavLink to={`/updatePlace/${allplace._id}`}>
                        <button className="btn border-amber-500 hover:bg-amber-500">
                          Edit
                        </button>
                      </NavLink>

                      <button
                        onClick={() => deleteHandler(allplace._id)}
                        className="btn border-amber-500 hover:bg-amber-500"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default PlanInAdmin;
