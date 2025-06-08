import React from "react";

const Heading = ({head,para}) => {
  return (
<>
    <div className=" capitalize text-center mt-2 p-2">

    <h1 className="lg:text-3xl text-2xl font-bold underline text-amber-500 mb-2"  >  {head}</h1>
    <span className="text-[20px]"  >
        {para}
    </span>
    </div>


    </>
  );
};

export default Heading;
