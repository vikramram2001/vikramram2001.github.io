import React from "react";
import Card from "./Card";
import "./Projects.css";
import UsedTech from "./UsedTech";
import { v4 as uuidv4 } from 'uuid';

const Projects = ({projectRef}) => {

  // projectCard



  const projects = [
    {
      projectName:"ESPN cricinfo",
      imgUrl:
        "https://mediabrief.com/wp-content/uploads/2021/10/Image-IPL-14-Phase-2-starts-on-ESPNcricinfo-mediabrief-1-1.jpg",
      codeUrl: "https://github.com/04psm/unit2",
      websiteUrl: "https://ephemeral-kashata-5793ad.netlify.app/",
      aboute: "ESPN cricinfo is a sports news website exclusively for the game of cricket. The site features news, articles, live coverage of cricket matches, and StatsGuru, a database of historical matches and players from the 18th century to the present. ",
      tech: ["Javascript", "HTML 5", "CSS 3"],
    },
    {
      projectName:"Myntra",
      imgUrl:
        "https://www.itln.in/h-upload/2022/05/27/1600x960_26062-myntra-introduces-under-48-hour-delivery.jpg",
      codeUrl: "https://github.com/praveen3411/Myntra-Clone",
      websiteUrl: "https://preeminent-meringue-cffdaf.netlify.app/",
      aboute: "Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India. The company was founded in 2007-2008 to sell personalized gift items.",
      tech: ["Javascript", "HTML 5", "CSS 3" , "React"],
    },
    {
      projectName:"Recruitee",
      imgUrl:
        "https://assets-global.website-files.com/60780a9b4720a47267a88257/6193b8f9f8f15bf5df65dce9_recruitee-shared-img.png",
      codeUrl: "https://github.com/sumitraghavwork/bashful-form-6526",
      websiteUrl: "https://luxury-halva-766a23.netlify.app/",
      aboute: "Recruitee is a business producing or selling computer software as a service  The software functions as an applicant tracking system for handling applications for jobs.",
      tech: ["Javascript", "HTML 5", "CSS 3" , "React" , "Node"],
    },
    {
      projectName:"Sugarcosmetic",
      imgUrl:
        "https://www.retail4growth.com/public/uploads/editor/2019-10-09/1570598353.jpg",
      codeUrl: "https://github.com/vikramram2001/React-project-sugarcosmetic",
      websiteUrl: "https://papaya-bublanina-40f543.netlify.app/",
      aboute: "The brand is devoted to producing products that are a great fit for every Indian skin tone throughout seasons and across the calendar, with a cruelty-free line that is high on design and high on performance.",
      tech: ["Javascript", "HTML 5", "CSS 3" , "React"],
    },
  ];

  return (
    <div className="container" id="projects" >
      <div className="project">
        <h1 ref={projectRef} className="d-flex justify-content-center">Projects</h1>
      </div>
      <div className="my-3">
        <div className="my-0 d-flex justify-content-center flex-wrap">
          {projects.map((item) => {
            let stack = item.tech;

            return (
              <Card 
                key={uuidv4()}
                projectName={item.projectName}
                imageUrl={item.imgUrl}
                codeUrl={item.codeUrl}
                websiteUrl={item.websiteUrl}
                about={item.aboute}
                usedTech={stack.map((tech) => {
                  return <UsedTech key={uuidv4()} techStack={tech} />;
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
