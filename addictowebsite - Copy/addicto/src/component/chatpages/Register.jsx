import React from "react";
import Add from "./addAvatar.png";

export const Register = () => {
return(
<div className="formContainer">
<div className="formWrapper">


<span className="logo">Addicto Chat</span>
<span className="tittle">Register</span>

    <form>
<input type="text" placeholder="display name"/>
<input type="email" placeholder="email"/>
<input type="password" placeholder="password"/>
<input style= {{display:"none"}} type="file" id="file"/>
<label htmlFor="file"></label>
<img src={Add} alt=""   />
<span>Add an avatar</span>
<button>Sign up</button>
    </form>

<p>Already have an account? Login</p>

</div>


</div>




);



};