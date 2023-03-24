import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
// @refresh reset
const pastdisaster = () => {
  const [data, setdata] = useState(null);
  const Fetching = async () => {
    fetch(
      "https://ap-south-1.aws.data.mongodb-api.com/app/hackit-tngat/endpoint/disaster_blogs"
    )
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas);
        setdata(datas);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    Fetching();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap gap-10 mt-44 justify-around">
        {data?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  {item.disaster_Info.slice(0, 200)}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.year}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <button className="bg-transparent hover:bg-testred text-testred font-semibold hover:text-white py-2 border boder-2 border-testred px-4 hover:border-transparent rounded">
                    Read More
                  </button>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default pastdisaster;
