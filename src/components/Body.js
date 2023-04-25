import Input from "./Input";
import Card from "./Card";
import resList from "../Utils/mokeData.js";
import Button from "./Button";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import BasicFormic from "./Formic"

function filteredData(searchItems, listOfResturants) {
  return listOfResturants.filter((e) =>
    e?.data?.name?.toUpperCase().includes(searchItems.toUpperCase())
  );
}
const Body = () => {
  useEffect((e) => {
    resListFromApi();
  }, []);

  async function resListFromApi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfResturants(json?.data?.cards[2]?.data?.data?.cards);
  }

  let [listOfResturants, setListOfResturants] = useState([]);
  const [searchItems, setsearchItems] = useState("");

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <Input
        type="search"
        value={searchItems}
        onChange={(e) => {
          setsearchItems(e.target.value);
        }}
      />
      <Button
        BTN_Name="Submit"
        onClick={() => {
          if (searchItems !== "") {
            const data = filteredData(searchItems, listOfResturants);
            setListOfResturants(data);
          } else {
            setListOfResturants(resList);
          }
        }}
      />
      <Button
        className="filter-btn"
        BTN_Name="Veg"
        onClick={() => {
          setListOfResturants(
            listOfResturants.filter((res) => {
              return res.data.veg === true;
            })
          );
        }}
      />
      <Button
        className="filter-btn"
        BTN_Name="Non-Veg"
        onClick={() => {
          setListOfResturants(
            listOfResturants.filter((res) => {
              return res.data.veg === false;
            })
          );
        }}
      />
      <Button
        className="filter-btn"
        BTN_Name="Reset"
        onClick={() => {
          setListOfResturants(resList);
        }}
      />
      <div className="card-container">
        {listOfResturants.map((resturent) => {
          return (
            <Link
              to={"/resturants/" + resturent.data.id}
              key={resturent.data.id}
            >
              <Card resData={resturent} />
            </Link>
          );
        })}
        <div className="Formic">
        <BasicFormic />
      </div>
      </div>
      
    </div>
  );
};

export default Body;
