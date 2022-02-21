import React, { useState } from "react";
import classes from "./dropdown.module.scss";
import SecondValuesList from "./second-values-list";
import { AnimatePresence, motion } from "framer-motion";

const MainValuesList = (props) => {
  const { value, mainValueHandler, mainValue } = props;

  const [secondValue, setSecondValue] = useState(
    value.values && value.values[0].name
  );
  const secondValueHandler = (name) => setSecondValue(name);

  return (
    <>
      <li
        onMouseEnter={() => {
          mainValueHandler(value.name);
        }}
        className={mainValue === value.name ? classes.active : undefined}
      >
        <p>{value.name}</p>
      </li>

      <AnimatePresence>
        {mainValue === value.name && value.values && (
          <motion.ul className={classes["second-values"]}
          initial={{left: '40%'}}
          animate={{left: '100%'}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
>
            {value.values.map((value, index) => (
              <SecondValuesList
                key={index}
                value={value}
                secondValue={secondValue}
                secondValueHandler={secondValueHandler}
                motion
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainValuesList;
