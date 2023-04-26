import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RES_URL } from "../Utils/constants";
import { Resturants_Menu_API } from "../Utils/constants";
import Shimmer from "./Shimmer";
import useOnline from "../Utils/useOnline";



const ResturantMenu = () => {
  const [resturantsMenu, setResturantsMenu] = useState(null);
  const { id } = useParams();
  const ResturantsMenuApi = async () => {
    let ResturantDetailsData = await fetch(Resturants_Menu_API + id);
    let ResturantDetailsDataJson = await ResturantDetailsData.json();
    console.log(
      ResturantDetailsDataJson.data.cards[0].card.card.info
    );
    setResturantsMenu(ResturantDetailsDataJson.data.cards[0].card.card.info);
  };

  useEffect((e) => {
    ResturantsMenuApi();
  }, []);

  const online = useOnline();
  // console.log(online);
  if(!online){
    console.log("offline");
    return <h1>Pls Check your internet connection</h1>
  }

  return !resturantsMenu ? (
    <Shimmer />
  ) : (
    <>
      <h1>Resurants id {resturantsMenu.id}</h1>
      <div className="card_details">
        <img src={RES_URL + resturantsMenu.cloudinaryImageId} />
        <h2>{resturantsMenu.name}</h2>
        <h4>{resturantsMenu.areaName}</h4>
        <h4>Cost for Two {resturantsMenu.costForTwo / 100}</h4>
        <h4>{resturantsMenu.avgRating} stars</h4>
      </div>
    </>
  );
};
export default ResturantMenu;
