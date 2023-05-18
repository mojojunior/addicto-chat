import React from "react";
import Cam from "./cam.png";
import Add from "./add.png";
import More from "./more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chatche = () => {
return(

<div className="chat">

    <div className="chattInfo">

        <span>Jane</span>
        <div className="chatIcons">

            <img src={Cam} alt=""/>
            <img src={Add} alt=""/>
            <img src={More} alt=""/>
        
        </div>
    </div>

    <Messages/>
    <Input/>
</div>

)
}

export default Chatche