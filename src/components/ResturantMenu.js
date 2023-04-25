import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RES_URL } from "../Utils/constants";
import Shimmer from "./Shimmer"
const ResturantMenu = () => {
  const [resturantsMenu, setResturantsMenu] = useState(null);
   const { id } = useParams();
  const ResturantsMenuApi = async () => {
    let ResturantDetailsData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id
    );
    let ResturantDetailsDataJson = await ResturantDetailsData.json();
    console.log(ResturantDetailsDataJson.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card);
    // console.log(ResturantDetailsDataJson.data);
    setResturantsMenu(ResturantDetailsDataJson.data.cards[0].card.card.info);
  };
  // async function ResturantsMenuApi(){
  //  let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241")
  // let Json = await data.json();
  // setResturantsMenu(Json.data)
  // console.log(Json.data);
  // }

  useEffect((e) => {
    ResturantsMenuApi();
  }, []);
 
  return (!resturantsMenu)?<Shimmer /> : (
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
