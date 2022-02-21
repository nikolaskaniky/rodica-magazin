import React, { useState } from "react";
import classes from "./dropdown.module.scss";
import MainValuesList from "./main-values-list";

const Dropdown = (props) => {
  const { clearExtraNavbarValue, item, extraNavbarValue, motion } = props;

  const [mainValue, setMainValue] = useState(item.values[0].name);
  const mainValueHandler = (name) => setMainValue(name);

  return (
    <>
      {item.name === extraNavbarValue && (
        <>
          <ul className={classes["main-values"]}>
            {item.values.map((value, index) => (
              <MainValuesList
                key={index}
                value={value}
                mainValueHandler={mainValueHandler}
                mainValue={mainValue}
              />
            ))}
          </ul>

          <div className={classes["image-section"]}>
            <div className={classes.image}></div>
            <p>{extraNavbarValue.toUpperCase()}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Dropdown;
