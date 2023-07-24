import React from 'react';
import "./Notfound.css";
import err from "./nerr.png";

const NotFound = () => {
  return (
    <div>
   <h1 className="err">sorry, this page doesn't exist</h1>
<div className='errc'>
<img className='errh1' src={err} alt="" />
</div>
    </div>
  )
}

export default NotFound