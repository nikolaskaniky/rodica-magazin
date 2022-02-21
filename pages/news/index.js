import React from "react";
import Content from "../../components/news-page/content/content";
import classes from './index.module.scss';

const NewsPage = () => {
  return (
    <main className={classes['news-page']}>
      <Content />
    </main>
  )
};

export default NewsPage;
