import React from "react";

const card = () => {
  return (
    <div className=" d-flex justify-content-center">
      <a
        className="mx-2"
        href="mail.google.com"
        data-toggle="tooltip"
        title="Gmail"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-solid fa-envelope fs-2"></i>
      </a>

      <a
        className="mx-2"
        href="https://github.com/vikramram2001"
        data-toggle="tooltip"
        title="Github"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github fs-2" />
      </a>
      <a
        className="mx-2"
        href="https://www.linkedin.com/in/vikram-ram-6b988b22b/"
        data-toggle="tooltip"
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin fs-2"> </i>
      </a>
      <a
        className="mx-2"
        href="7827408527"
        data-toggle="tooltip"
        title="enter your mobile no"
      >
        
        <i class="fa fa-phone fs-2" aria-hidden="true" target="_blank"></i>
      </a>
    </div>
  );
};

export default card;
