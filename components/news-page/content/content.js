import React from "react";
import Image from "next/image";
import classes from "./content.module.scss";
import korea from "../../../assets/korea.jpg";
import { BsArrowRight } from 'react-icons/bs'

const DATA_ARRAY = [
  {
    title: "HELLO WORLD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore reiciendis fugiat nihil aperiam! Beatae fuga nesciunt, commodi ducimus itaque doloribus magni similique cupiditate, nobis praesentium cumque temporibus dignissimos repellat rem ratione, consectetur et repudiandae necessitatibus saepe sapiente quasi voluptates amet natus voluptate. Aliquam fugit velit natus facere ullam, sed iusto nostrum, sapiente quisquam exercitationem deleniti magnam? Deleniti, ipsum doloribus?",
    image: korea,
  },

  {
    title: "HELLO WORLD 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore reiciendis fugiat nihil aperiam! Beatae fuga nesciunt, commodi ducimus itaque doloribus magni similique cupiditate, nobis praesentium cumque temporibus dignissimos repellat rem ratione, consectetur et repudiandae necessitatibus saepe sapiente quasi voluptates amet natus voluptate. Aliquam fugit velit natus facere ullam, sed iusto nostrum, sapiente quisquam exercitationem deleniti magnam? Deleniti, ipsum doloribus?",
    image: korea,
  },

  {
    title: "HELLO WORLD 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore reiciendis fugiat nihil aperiam! Beatae fuga nesciunt, commodi ducimus itaque doloribus magni similique cupiditate, nobis praesentium cumque temporibus dignissimos repellat rem ratione, consectetur et repudiandae necessitatibus saepe sapiente quasi voluptates amet natus voluptate. Aliquam fugit velit natus facere ullam, sed iusto nostrum, sapiente quisquam exercitationem deleniti magnam? Deleniti, ipsum doloribus?",
    image: korea,
  },

  {
    title: "HELLO WORLD 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore reiciendis fugiat nihil aperiam! Beatae fuga nesciunt, commodi ducimus itaque doloribus magni similique cupiditate, nobis praesentium cumque temporibus dignissimos repellat rem ratione, consectetur et repudiandae necessitatibus saepe sapiente quasi voluptates amet natus voluptate. Aliquam fugit velit natus facere ullam, sed iusto nostrum, sapiente quisquam exercitationem deleniti magnam? Deleniti, ipsum doloribus?",
    image: korea,
  },
];

const Content = () => {
  return (
    <section className={classes.content}>
      {DATA_ARRAY.map((item, index) => (
        <div className={classes.box} key={index}>
          <div className={classes.presentation}
            style={{
                gridColumn: index % 2 === 0 ? '1 / 2' :' 2 / 3',
                gridRow: '1 / 2'
            }}
          >
            <div className={classes.title}>
              <h1>{item.title}</h1>
            </div>

            <div className={classes.description}>
              <p>{item.description}</p>
            </div>
          </div>

          <div className={classes.cta}>
            <div className={classes["image-wrapper"]}>
                <div className={classes.frame}
                    style={{
                        left: index % 2 !== 0 && '-30px' 
                    }}
                ></div>
              <div className={classes.image}>
                <Image src={item.image} layout="responsive" alt="img" />
              </div>
            </div>

            <div className={classes.action}>
                <p>See now</p>
                <BsArrowRight />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;
