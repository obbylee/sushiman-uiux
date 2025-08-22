"use client";

import { useState } from "react";
import { arrowRight, star } from "@/assets";
import { popularFoodCard } from "@/constants";
import Image from "next/image";
import { motion } from "motion/react";

const PopularFoods = () => {
  const [active, setActive] = useState("");

  return (
    <section
      id="menu"
      className="popular-foods bg-[url(/assets/popular_bg.png)] bg-contain bg-center bg-no-repeat min-h-[820px] w-full max-sm:py-16 max-sm:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="popular-foods__title"
      >
        Popular Food / 人気
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8 }}
        className="popular-foods__filters"
      >
        <button
          onClick={() => setActive("")}
          className="popular-foods__filter-btn"
        >
          All
        </button>

        {popularFoodCard.map((food, index) => (
          <button
            key={index}
            onClick={() => setActive(`${food.title}`)}
            className={
              active == food.title
                ? "popular-foods__filter-btn active"
                : "popular-foods__filter-btn"
            }
          >
            <Image
              src={food.imgSrc}
              alt={food.alt}
              className="w-[36px] h-[36px] object-contain"
            />
            {food.title}
          </button>
        ))}

        <button
          onClick={() => setActive("")}
          className="popular-foods__filter-btn"
        >
          All
        </button>
      </motion.div>

      <motion.div className="popular-foods__catalogue">
        {popularFoodCard.map((food, index) => (
          <motion.article
            key={index}
            className={
              active == food.title
                ? "popular-foods__card active-card transition-all delay-200"
                : "popular-foods__card transition-all"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
          >
            <Image
              src={food.imgSrc}
              alt={food.alt}
              className="popular-foods__card-image"
            />
            <h4 className="popular-foods__card-title">{food.title}</h4>

            <div className="popular-foods__card-details flex-between">
              <div className="popular-foods__card-rating">
                <Image src={star} alt="star" />
                <p>{food.rating}</p>
              </div>

              <p className="popular-foods__card-price">{food.price}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="popular-foods__button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Explore Food</span>
        <Image src={arrowRight} alt="arrow-right" />
      </motion.button>
    </section>
  );
};

export default PopularFoods;
