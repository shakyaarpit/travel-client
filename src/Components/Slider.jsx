import React, { useEffect, useState } from "react";

const images = [
  "https://www.holidaymonk.com/wp-content/uploads/2024/05/Kedarnath-Yatra-Tour-Package.webp",
  "https://img.etimg.com/thumb/width-1200,height-900,imgsize-209978,resizemode-75,msid-117857375/news/india/badrinath-temple-portals-to-open-on-may-4.jpg",
  "https://trueyatra.com/wp-content/uploads/2023/12/Girnar-Temple-Girnar-Hill-1024x576.png",
  "https://5.imimg.com/data5/SELLER/Default/2024/6/424449761/YX/RQ/OU/220254096/himachal-pardesh-tour-package-service-500x500.jpg",
  "https://www.trawell.in/admin/images/upload/685479848Mandi.jpg",
  "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1706528304_830937-delhi-to-haridwar-tour-package-by-car-package-slider-image.webp",
  "https://images.herzindagi.info/image/2023/Nov/snowfall-areas-in-himachal-pradesh.jpg",
  "https://cdn1.prayagsamagam.com/media/2023/05/24213639/Mathura-Vrindavan-2.webp",
  "https://www.trinityairtravel.com/bblog/7980_second.jpg",
  "https://dwq3yv87q1b43.cloudfront.net/public/blogs/17382410622117-448836716.png",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
    <div className=" text-center p-2">

    <h1 className="text-3xl font-bold underline text-amber-500 mb-2"  > All India Travel</h1>
    <span className="text-[20px]"  >
        we are traveling around all india including Holy pilgrimage (तीर्थ स्थल), hill station located in Himachal Pradesh, Temples etc...
    </span>
    </div>
      <div className=" flex justify-center items-center w-full  mb-4 lg:h-[80vh] h-[40vh]  ">
        <img
          className=" w-full lg:h-[380px] h-[200px] object-cover rounded-2xl"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          // style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
        />
        
      </div>
    </>
  );
};

export default Slider;
