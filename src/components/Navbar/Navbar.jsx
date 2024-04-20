import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/ioffer logo.png";
import MegaMenuItem from "./MegaMenuItem";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};
const womensMainLink = "/categories/women-fashion";

const womensCategories = {
  title: "WOMEN'S",
  mainLink: womensMainLink,
  subCategories: [
    {
      name: "WOMEN'S SHOES",
      link: womensMainLink + "/womens-shoes",
    },
    {
      name: "TOPS",
      link: womensMainLink + "/tops",
    },
    {
      name: "BOTTOMS",
      link: womensMainLink + "/bottoms",
    },
    {
      name: "ACTIVEWEAR",
      link: womensMainLink + "/activewear",
    },
    {
      name: "ACCESSORIES",
      link: womensMainLink + "/accessories",
    },
    {
      name: "LINGERIE & INTIMENTS",
      link: womensMainLink + "/lingerie-intiments",
    },
    {
      name: "OUTERWEAR & JACKETS",
      link: womensMainLink + "/outerwear-jackets",
    },
  ],
};

const mensMainLink = "/categories/mens-fashion";

const mensCategories = {
  title: "MEN'S",
  mainLink: mensMainLink,
  subCategories: [
    {
      name: "TOPS",
      link: mensMainLink + "/tops",
    },
    {
      name: "BOTTOMS",
      link: mensMainLink + "/bottoms",
    },
    {
      name: "ATHLETIC APPAREL",
      link: mensMainLink + "/athletic-apparel",
    },
    {
      name: "LUGGAGE & BAGS",
      link: mensMainLink + "/luggage-bags",
    },
    {
      name: "MEN'S SHOES",
      link: mensMainLink + "/mens-shoes",
    },
    {
      name: "ACCESSORIES",
      link: mensMainLink + "/accessories",
    },
    {
      name: "UNDERWEAR & NIGHT",
      link: mensMainLink + "/underwear-night",
    },
    {
      name: "OUTERWEAR & JACKETS",
      link: mensMainLink + "/outerwear-jackets",
    },
    {
      name: "NOVELTY & SPECIAL USE",
      link: mensMainLink + "/novelty-special-use",
    },
  ],
};

const bagsMainLink = "/categories/bags-purses";

const bagsCategories = {
  title: "BAGS & PURSES",
  mainLink: bagsMainLink,
  subCategories: [
    {
      name: "WOMEN'S BAGS",
      link: bagsMainLink + "/womens-bags",
    },
    {
      name: "UNISEX BAGS",
      link: bagsMainLink + "/unisex-bags",
    },
    {
      name: "OTHER BAGS & ACCESSORIES",
      link: bagsMainLink + "/other-bags-accessories",
    },
  ],
};

const sneakersMainLink = "/categories/sneakers";

const sneakersCategories = {
  title: "SNEAKERS",
  mainLink: sneakersMainLink,
  subCategories: [
    {
      name: "MEN'S SNEAKERS",
      link: sneakersMainLink + "mens-sneakers",
    },
    {
      name: "WOMEN'S SNEAKERS",
      link: sneakersMainLink + "womens-sneakers",
    },
  ],
};

function Navbar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <nav className="pt-2 px-5">
      <ul>
        <li className="logo">
          <Link to="/" style={linkStyle}>
            <img src={logo} alt="ioffer logo" height="50px" />
          </Link>
        </li>
        <li className="d-flex gap-4">
          <MegaMenuItem {...womensCategories} />
          <MegaMenuItem {...mensCategories} />
          <MegaMenuItem {...sneakersCategories} />
          <MegaMenuItem {...bagsCategories} />
        </li>
        <li
          className="search w-full flex-grow-1"
          style={{ minWidth: "10rem", maxWidth: "28rem" }}
        >
          <div class="searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#666666"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </button>
          </div>
        </li>
        <li
          className={`navBarItem d-flex gap-4 align-items-center justify-content-between flex-nowrap`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#333"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#333"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
