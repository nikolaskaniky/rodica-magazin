import React from "react";
import Categories from "../../components/shop-page/categories/categories";
import Description from "../../components/shop-page/description/description";
import ExtraNavbar from "../../components/shop-page/extra-navbar/extra-navbar";
import Hero from "../../components/shop-page/hero/hero";
import classes from './index.module.scss';

const ShopPage = () => {
  return (
    <main className={classes['shop-page']}>
      <Hero />
      <ExtraNavbar />
      <Categories />
      <Description />
    </main>
  )
};

export default ShopPage;
