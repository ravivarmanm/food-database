import React, { useState, useEffect } from "react";
import axios from "axios";
const FoodData = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const APP_ID = "526371bc";
  const APP_KEY = "cfc085513239d793856f867b3dc9581f";
  const baseUrl =
    "https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}";
  console.log(baseUrl);
  useEffect(async () => {
    axios.get(baseUrl).then((reponse) => {
      setData(reponse.data);
    });
  }, []);

  return (
    <div>
      <h1>Food Data</h1>
    </div>
  );
};
export default FoodData;
