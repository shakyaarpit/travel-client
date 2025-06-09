import React from "react";
import {} from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import Heading from "../Heading";
const Contact = () => {
  return (
    <>
    <div>
      <Heading head={"Contact Us"}/>
      <div className=" flex min-h-[79vh] lg:min-h-auto flex-col lg:flex-row gap-6 justify-around items-center pt-6 pb-6  ">

        <div>
          <figure>
            <img
              className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full"
              src="https://thumbs.dreamstime.com/b/contact-us-button-mail-call-icons-gray-silver-vector-illustration-isolated-white-background-black-118015279.jpg"
              alt="Movie"
            />
          </figure>
        </div>

        <div className="lg:w-[50%] w-[90%] flex flex-col gap-6">
          <p className="flex justify-center items-center gap-1 lg:text-2xl"> <MdContactPhone/> Mobile_No : 9956596429</p>
          <p className="flex justify-center items-center gap-1 lg:text-2xl"> <FaWhatsapp/> Whatsapp_No : 9956596429</p>
          <p className="flex  justify-center items-center gap-1 lg:text-2xl"> <FaInstagramSquare/> Instagram_Id : <a href="https://www.instagram.com/_its_arpit_0711/" target="_blank" rel="noopener noreferrer"> <span className="underline underline-offset-8">
          go to instagram  </span> </a></p>
        
          
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Contact;
