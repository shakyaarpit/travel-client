import React from "react";
import Card from "../Card";
import SearchDestination from "../SearchDestination";
import Hero from "../Hero";
import Heading from "../Heading";
import { useNavigate } from "react-router-dom";
import Destination from "./Destination";
import Filter from "../Filter";
import BlogHome from "../BlogHome";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  let headingDes = "Find Your Best Destination";
  let paraDes = "we have more than 20 places";
  let headingPlan = "Best Vocations Plan";
  let paraPlan = "Plan Your Best Vocation with Travel@Arpit";
  let headingBlog = "Our Blog";
  let paraBlog = "All experiance write here!";
  let heroHeading = "All India Travel";
  let heroPara = `traveling across India is not just a journey through geography—it's a journey through tradition, modernity, and personal discovery.
  `;
  let blogHeading = "Travels Blog";
  let blogInDetails = "Here you can know all about places in details ";

  let navigate = useNavigate();
  let btnNameD = "Show All Plan";
  let btnNameB = " Read Blog ";
  return (
    <>
      <div className=" text-green-700 bg-white rounded-2xl p-1 fixed lg:text-5xl text-3xl z-10 right-3 top-[400px] ">
        <a href={"http://wa.me/919956596429"} target="_blank">
          <FaWhatsapp />
        </a>
      </div>

      <Hero
        btnName={btnNameD}
        navigate={"/destination"}
        heroD={heroHeading}
        heroP={heroPara}
      />
      {/* <Heading head={headingDes} para={paraDes} />
      <SearchDestination />
      <Card /> */}
      <Heading head={headingDes} para={paraDes} />
      <Filter />
      <hr className="mt-10" />
      {/* <Heading head={headingPlan} para={paraPlan} /> */}
      <Destination  />
      <hr />
      <Heading head={blogHeading} para={blogInDetails} />

      <BlogHome />
      
      {/* <Heading head={headingBlog} para={paraBlog} />
      <div className="flex ">
        <Hero btnName={btnNameB} navigate={"/blog"} heroD={blogHeading} heroP={blogInDetails} />
      </div> */}
    </>
  );
};

export default Home;
