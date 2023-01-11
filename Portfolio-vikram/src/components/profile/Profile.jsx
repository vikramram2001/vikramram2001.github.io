import React from "react";
import "./Profilecss.css";
import { Type } from "./typescripts";


const Profile = () => {
  return (
    <div className="box" >
      <div id="Bro" className="d-flex profile container  rounded flex-wrap">
        <div className="  vikramImg " style={{display:"flex",justifyContent: "center"}}>
          <img
            className="rounded-circle"
            src="https://media.licdn.com/dms/image/C4D03AQFh9YSGf0iQkw/profile-displayphoto-shrink_400_400/0/1653665375959?e=1678320000&v=beta&t=iBTR21mOUyMS42_PYSc1hmW3-uRmHtxQ7u9jq_qxC2U"
            alt="vikram"
          />
        </div>
        <div className="summry" style={{}}>
          <h1 className="my-2">Vikram Ram</h1>
          <div className="blue"><h2><Type/></h2></div>
          <hr className="border border-light" />
          <p>
          When I first attended the Masai School workshop, I didn't know much about coding. But after the workshop, I realized that I also can do coding and web development. So I decided to join Masai School and pursue a career in software development.
          </p>
          <button className="btn btn-dark border"><a className="text-decoration-none text-light" href="https://drive.google.com/file/d/1yho2mCPhzXNnzyOvWdmw13PMupr0Nsd6/view?usp=share_link" target="_blank" rel="noopener noreferrer">RESUME</a> </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
