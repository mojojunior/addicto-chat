import React from "react";
import image from "./ema.png"
const Chats = () => {
return(

<div className="chats">
    <div className="userChat">
        <img src={image} alt="image file loading"></img>
        <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
        </div>
        </div>

        <div className="userChat">
        <img src={image} alt="image file loading"></img>
        <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
        </div>
        </div>

        <div className="userChat">
        <img src={image} alt="image file loading"></img>
        <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
        </div>
        </div>

        
        </div>

)
}

export default Chats