import React from "react";
import image from "./ema.png";

const Search = () => {
return(

<div className="search">Search
<div className="searchForm">
    <input type="text" placeholder="find a user"/>
       
      </div>
      <div className="userChat">
        <img src={image} alt="image file loading"></img>
        <div className="userChatInfo">
            <span>Jane</span>
        </div>
      </div>
      </div>

)
}

export default Search