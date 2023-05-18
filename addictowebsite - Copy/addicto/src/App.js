import React from "react";
import './App.css';
import logo from "./images/logo.png";
import {
  BrowserRouter as Router,
  useRoutes,
  Link,
} from "react-router-dom";
import HomeComponent from "./component/HomeComponent";
import About from "./component/About";
import Chat from "./component/Chat";


const App = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeComponent /> },
    { path: "/about", element: <About /> },
    { path: "/chat", element: <Chat /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <div className="body">
     
        <p className="nav">
        <img src={logo} alt="Logo" />
            <Link to="/">Home</Link>
        
            <Link to="/about">About</Link>
         

          
            <Link to="/chat">Chat</Link>


            </p>
      </div>
      <App />
    </Router>
  );
};

export default AppWrapper;
