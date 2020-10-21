import React from "react";
import "../sass/pages/home.scss";

const Button = ({ label }) => {
  return (
    <a href='/' className='btn btn-gold'>
      {label}
    </a>
  );
};

export default Button;
