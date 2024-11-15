import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosExample = () => {
  const [cat, setCat] = useState({});
  const url = "https://api.thecatapi.com/v1/images/search";
  console.log(cat);
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setCat(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <img src={cat.url} alt="" />
    </div>
  );
};

export default AxiosExample;
