import React, { useState, Fragment } from "react";
import classes from "./extra-navbar.module.scss";
import { SHOP_NAVBAR_DATA } from "../../../data/shop-navbar-data";
import Dropdown from "./dropdown";
import { AnimatePresence, motion } from "framer-motion";

const ExtraNavbar = () => {
  const [extraNavbarValue, setExtraNavbarValue] = useState("");
  const extraNavbarValueHandler = (name) => setExtraNavbarValue(name);
  const clearExtraNavbarValue = () => setExtraNavbarValue("");

  return (
    <header className={classes["extra-navbar"]}>
      <ul className={classes["extra-navbar-list"]}>
        {SHOP_NAVBAR_DATA.map((item, index) => (
          <Fragment key={index}>
            <li
              onMouseEnter={() => setExtraNavbarValue(item.name)}
              className={
                extraNavbarValue === item.name ? classes.active : undefined
              }
            >
              <p>{item.name}</p>
            </li>
          </Fragment>
        ))}
        <AnimatePresence>
          {extraNavbarValue && (
            <motion.section
              className={classes.dropdown}
              onMouseLeave={clearExtraNavbarValue}
              initial={{
                height: "0px",
                opacity: 0,
                overflowY: "hidden",
              }}
              animate={{
                height: "400px",
                opacity: 1,
                overflowY: "auto",
              }}
              exit={{
                height: "0px",
              }}
              transition={{ duration: 0.4 }}
            >
              {SHOP_NAVBAR_DATA.map((item, index) => (
                <Dropdown
                  clearExtraNavbarValue={clearExtraNavbarValue}
                  item={item}
                  extraNavbarValue={extraNavbarValue}
                  key={index}
                />
              ))}
            </motion.section>
          )}
        </AnimatePresence>
      </ul>
    </header>
  );
};

export default ExtraNavbar;
