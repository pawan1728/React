import { useState } from "react";
import Input from "./Input";
import resList from "../Utils/mokeData";
const Search = () => {
    return (
      <div className="input-container">
   <Input type="search" className="search-btn" onChange={(res)=>{}}/>
   <Input type="submit" className="submit-btn" onClick={()=>{}}/>
      </div>
    );
  };
  export default Search