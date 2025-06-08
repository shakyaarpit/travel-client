import React from "react";

const Card = () => {
  return (
    <div className="flex  justify-between items-center flex-wrap">
      <div className="card border-2 p-2 bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://media.istockphoto.com/id/846011148/photo/mountain-girl-watching-amazing-view.jpg?s=612x612&w=0&k=20&c=P44lwtGactdLv8fY-kMSqhuU8yzGJ442Wsy1gu1yw8w="
            alt="place"
            className="rounded-xl"
          />
        </figure>
      </div>
    </div>
  );
};

export default Card;
