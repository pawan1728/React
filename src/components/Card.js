import { RES_URL } from "../Utils/constants";
const Card = (props) => {
  const { resData } = props;
  const { name, cuisines, deliveryTime, totalRatingsString} = resData.data;
  return (
    <div className="card">
      <img
        src={RES_URL + resData.data.cloudinaryImageId}
        alt=" "
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};
export default Card;
