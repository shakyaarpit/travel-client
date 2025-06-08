import React from "react";
import { NavLink } from "react-router-dom";

const BlogHome = () => {
  return (
    <div>
      <div className=" flex flex-col lg:flex-row gap-6 justify-around items-center pt-6 pb-6  ">

        <div>
          <figure>
            <img
              className="lg:w-[500px] lg:h-[500px] w-[250px] h-[250px] rounded-full"
              src="https://i.pinimg.com/736x/09/6d/82/096d821dcc23a4619455eb0f3d3dd514.jpg"
              alt="Movie"
            />
          </figure>
        </div>

        <div className="lg:w-[50%] w-[90%]">
          <h2 className="text-2xl text-amber-500 font-bold mb-2 underline">Why Travel Is Important</h2>
          <p className="text-[20px]">Travel is important because it broadens our perspective, allowing us to experience new cultures, languages, and ways of life. It helps us learn more about the world and ourselves, fostering personal growth and open-mindedness. Travel also reduces stress, boosts creativity, and strengthens relationships by creating lasting memories. Additionally, it supports global understanding and promotes tolerance by connecting people from different backgrounds.</p>
          <NavLink to={"/blog"}>

            <button className="btn border-amber-500 mt-4  hover:bg-amber-500  ">Read More Blog</button>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
