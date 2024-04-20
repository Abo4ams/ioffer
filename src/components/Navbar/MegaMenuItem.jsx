import React from "react";
import { Link } from "react-router-dom";
import "./MegaMenuItem.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

function MegaMenuItem(props) {
  return (
    <Link
      to={props.mainLink}
      style={linkStyle}
      className="megaMenuItem dropdown"
    >
      <div className="dropdown-title my-auto">{props.title}</div>
      <div className="dropdown-content">
        <div className="megaMenuItem__content__row">
          {props.subCategories.map((subCategory, index) => (
            <Link
              to={subCategory.link}
              style={linkStyle}
              key={index}
              className="dropdown-content-item"
            >
              {subCategory.name}
            </Link>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default MegaMenuItem;
