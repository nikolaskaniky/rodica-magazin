import React from "react";
import { SHOP_NAVBAR_DATA } from "../../../data/shop-navbar-data";
import classes from "./description.module.scss";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <section className={classes.description}>
      {SHOP_NAVBAR_DATA.map((item, index) => (
        <motion.div className={classes.box} key={index}
            initial={{transform: index === 0 || index === 2 || index === 4 ? 'translateX(-50%)' : 'translateX(50%)', opacity: 0}}
            whileInView={{
                transform: 'translateX(0%)',
                opacity: 1
            }}
            transition={{duration: 0.8}}
            viewport={{once: true}}
        >
          <div className={classes.image}>image</div>
          <div className={classes.presentation}>
            <div className={classes.nr}>
              <h1>0{index + 1}</h1>
            </div>

            <div className={classes.description}>
              <div className={classes.title}>
                <h4>{item.name}</h4>
              </div>

              <div className={classes.text}>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Description;
