import React, { useEffect } from "react";
import TechStack from "./TechStack";
import { v4 as uuidv4 } from 'uuid';
import Aos from "aos";
import "aos/dist/aos.css";

const Frontend = () => {
  useEffect(() => {
    Aos.init({duration:2000})
   })
  


  const frontendTechStack = [
    {
      img: "https://taher-ahmed.vercel.app/html-5.svg",
      name: "HTML 5",
    },
    {
      img: "https://taher-ahmed.vercel.app/css-3.svg",
      name: "CSS 3",
    },
    {
      img: "https://taher-ahmed.vercel.app/javascript.svg",
      name: "JavaScript",
    },
    {
      img: "https://taher-ahmed.vercel.app/react.svg",
      name: "React",
    },
    {
      img: "https://taher-ahmed.vercel.app/redux.svg",
      name: "Redux",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVF1dospej2VMDF0sb-TuNCYudETDT6UKVQ&usqp=CAU",
      name: "Jsx",
    },
   
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSweFYSGs5msi-oMwKtBTePLiOM_jR6J5B3sw&usqp=CAU",
      name: "Bootstrap 5",
    },
     {
      img: "https://taher-ahmed.vercel.app/npm-icon.svg",
      name: "Npm",
    },
  ];
  return (
    <div>
      <div  data-aos='flip-left'>
        <div className="frontend my-3 mx-2">
          <h4 className="d-flex justify-content-center">Front End:</h4>
        </div>
        <div className="d-flex flex-wrap justify-content-center" >
          {
            frontendTechStack.map((item, i) => {
              return (<TechStack key={
                uuidv4()
              } img={item.img} name={ item.name}/>)
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Frontend;
