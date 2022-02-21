import React, { useState } from "react";
import { useRouter } from "next/router";
import classes from "./navbar.module.scss";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { IoLogoApple } from 'react-icons/io'

const MENU_ARRAY = [
  {
    name: "home",
    linkTo: "/",
  },

  {
    name: "magazin",
    linkTo: "/shop",
  },

  {
    name: "consultatii",
    linkTo: "/consultations",
  },

  {
    name: "cursuri",
    linkTo: "/courses",
  },

  {
    name: "NFT",
    linkTo: "/nft",
  },

  {
    name: "crypto",
    linkTo: "/crypto",
  },

  {
    name: "news",
    linkTo: "/news",
  },
];

const Navbar = () => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <IoLogoApple />
      </div>

      <ul className={classes.menu}>
        {MENU_ARRAY.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              router.push(item.linkTo);
            }}
            className={path === item.linkTo ? classes.active : undefined}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>

      <div className={classes.shop}>
        <BsBookmark className={classes["book-mark"]} />
        <RiShoppingBasket2Line className={classes.cart} />
      </div>

      <div className={classes.actions}>
        <p>Sign in</p>
        <p>Sign up</p>
      </div>
    </header>
  );
};

export default Navbar;
