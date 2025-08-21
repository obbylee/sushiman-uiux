"use client";

import { useState } from "react";
import { arrowRight, star } from "@/assets";
import { popularFoodCard } from "@/constants";
import Image from "next/image";

const PopularFoods = () => {
  const [active, setActive] = useState("");

  return (
    <section
      id="menu"
      className="popular-foods bg-[url(/assets/popular_bg.png)] bg-contain bg-center bg-no-repeat min-h-[820px] w-full max-sm:py-16 max-sm:px-8"
    >
      <h2 className="popular-foods__title" data-aos="flip-up">
        Popular Food / 人気
      </h2>

      <div className="popular-foods__filters" data-aos="fade-up">
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
      </div>

      <div className="popular-foods__catalogue" data-aos="fade-up">
        {popularFoodCard.map((food, index) => (
          <article
            key={index}
            className={
              active == food.title
                ? "popular-foods__card active-card"
                : "popular-foods__card"
            }
            data-aos="ease-in-out"
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
          </article>
        ))}
      </div>

      <button className="popular-foods__button">
        <span>Explore Food</span>
        <Image src={arrowRight} alt="arrow-right" />
      </button>
    </section>
  );
};

export default PopularFoods;
