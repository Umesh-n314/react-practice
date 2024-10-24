import axios from "axios";
import { useEffect } from "react";

const pincode = 518301;
const url = `https://api.postalpincode.in/pincode/${pincode}`;

// calling api using axios is simple and easy compared to native fetch method, in which we need to handle params and headers effectively which is time consuming,
//Using axios, we get responce and data directly with single await,And we can handle errors effectively
//we need to pass url, method defalut is get, if post method we can pass data also
export const AxiosExample = () => {
  async function fetchPostalInfo() {
    try {
      const data = await axios({
        url: url,
        method: "get",
        //   if method is post we can pass headears and we can also pass query params
        //   headers:{
        //       name:"umesh",
        //       email:"umesh@gmail.com"
        //   },
        //   params: {
        //     name:"umesh",
        //     id:"8142"
        //   },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchPostalInfo();
  }, []);

  return (
    <>
      <h1>Axios</h1>
    </>
  );
};
