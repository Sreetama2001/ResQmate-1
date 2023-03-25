import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const panicalert = () => {
  const [formdata, setformdata] = useState({
    number: "",
    text: "",
  });
  const [phone, setphone] = useState("+91");

  async function sendData(e) {
    e.preventDefault();
    console.log(formdata);
    try {
      //   if (formdata.number !== "") {
      //     let n = `+${formdata.number}`;
      //     setformdata({ ...formdata, number: n });
      //   }
      const res = await axios.post("https://twilio-backend.onrender.com/", {
        num: formdata.number,
        text: formdata.text,
      });
      setformdata({ number: "", text: "" });
      console.log(res.status);
    } catch (error) {
      console.log(error, error.message);
    }
  }

  return (
    <Layout>
      <div className="flex justify-center">
        <form className="w-full max-w-sm mt-40" onSubmit={sendData}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Phone Number
              </label>
            </div>
            <div className="md:w-2/3">
              <PhoneInput
                searchStyle={{
                  color: "black",
                  padding: "8px 12px",
                  fontWeight: "bold",
                }}
                dropdownStyle={{ color: "black" }}
                value={phone}
                country={"eg"}
                enableSearch={true}
                countryCodeEditable={false}
                onChange={(phone) =>
                  setformdata({ ...formdata, number: phone })
                }
              />
              {/* <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                onChange={(e) =>
                  setformdata({ ...formdata, number: e.target.value })
                }
                type="text"
                placeholder="Type Your Number"
              /> */}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Text
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white py-4 appearance-none border-2 border-gray-200 rounded w-[120%] px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                placeholder="Male"
                onChange={(e) =>
                  setformdata({ ...formdata, text: e.target.value })
                }
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6"></div>
          <div className="md:flex md:items-center md:justify-center">
            <div className="flex justify-center">
              <button
                className="shadow w-40 bg-red-600 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default panicalert;
