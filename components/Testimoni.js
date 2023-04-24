import React, { useEffect, useState } from "react";
import axios from "axios";
// import react slick
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import TweetEmbed from "react-tweet-embed";

const Testimoni = () => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [tweetdata, settweetdata] = useState(null);
  const [sliderRef, setSliderRef] = useState(null);
  async function getTweets() {
    const res = await axios.get(
      "https://ap-south-1.aws.data.mongodb-api.com/app/hackit-tngat/endpoint/crisis_tweets"
    );
    // console.log(res.data);
    settweetdata(res.data);
    // res.data.map((item) => {
    //   item.disaster_tweet_ids.map((itemm) => {
    //     console.log(item._id, itemm);
    //   });
    // });
  }

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex"
        autoplay={true}
      >
        {tweetdata?.map((item, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-red-500 transition-all rounded-lg p-5 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <TweetEmbed tweetId={item.disaster_tweet_ids[5]} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-red-500 border hover:bg-red-500 hover:text-white transition-all text-red-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6" />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-red-500 border hover:bg-red-500 hover:text-white transition-all text-red-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
