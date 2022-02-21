import React from "react";
import classes from './categories.module.scss';
import { SHOP_NAVBAR_DATA } from "../../../data/shop-navbar-data";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <motion.section className={classes.categories}
      initial={{
        transform: 'translateY(50%)',
        opacity: 0
      }}
      whileInView={{
        transform: 'translateY(-0%)',
        opacity: 1
      }}
      transition={{duration: 0.4}}
      viewport={{once: true}}
    >
      {SHOP_NAVBAR_DATA.map((category, index) => (
        <div className={classes.box} key={index}>
          <p>{category.name.toUpperCase()}</p>
        </div>
      ))}
    </motion.section>
  );
};

export default Categories;
