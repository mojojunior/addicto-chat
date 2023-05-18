import React from "react";
import Chatche from "../chatcomponents/Chatche";
import Sidebar from '../chatcomponents/Sidebar';



const Home = () => {
return(

    <div className="home">
        <div className="container">

     <Sidebar/>
     <Chatche/>


        </div>
    </div>
)
}

export default Home