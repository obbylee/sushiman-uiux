"use client";

import {
  arrowHorizontal,
  arrowVertical,
  check,
  sushi4,
  sushi5,
} from "@/assets";
import { trendingDrinks, trendingSushis } from "../constants";
import Image from "next/image";
import { motion } from "motion/react";

const Trending = () => {
  return (
    <section className="relative flex flex-col overflow-hidden" id="food">
      <section className="w-full min-h-[640px] flex flex-row max-sm:flex-col">
        <motion.div
          className="flex flex-1 justify-center flex-col py-8 px-16 max-sm:p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="sushi__subtitle">What’s Trending / トレンド</p>

          <h3 className="sushi__title">Japanese Sushi</h3>
          <p className="sushi__description">
            Feel the taste of the most delicious Sushi here.
          </p>

          <ul className="flex-between list-none flex-wrap gap-5">
            {trendingSushis.map((sushi, index) => (
              <li
                key={index}
                className="flex flex-1 items-center flex-row gap-3 min-w-[210px]"
              >
                <div className="w-[24px] h-[24px] rounded-full bg-primary-color flex-center">
                  <Image
                    src={check}
                    alt="check"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <p className="flex flex-1 text-base font-medium font-plus-jakarta-sans text-secondary-color">
                  {sushi}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex-center relative flex-1 py-8 px-16 bg-white bg-[url(/assets/japanese_sushi.png)] bg-no-repeat bg-contain bg-center max-sm:w-full max-sm:bg-cover max-sm:p-16">
          <Image
            src={sushi5}
            alt="sushi-5"
            data-aos="fade-left"
            className="w-[254px] h-[260px] object-contain max-sm:w-[70%] max-sm:h-[70%]"
          />

          <div className="absolute z-10 -left-[2.5px] top-[12%] max-sm:hidden">
            <Image
              src={arrowVertical}
              alt="arrow"
              className="w-auto h-full object-contain"
            />
          </div>

          <div className="absolute z-10 -bottom-[6.5px] right-[12%] max-sm:hidden">
            <Image
              src={arrowHorizontal}
              alt="arrow"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <motion.div
        className="hidden md:flex md:justify-center md:items-center absolute top-[44%] left-[44%] z-10 w-[160px] h-[160px] rounded-full bg-secondary-color cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-lg font-medium font-plus-jakarta-sans text-white">
          Discover
        </p>
      </motion.div>

      <section className="w-full min-h-[640px] flex flex-row max-sm:flex-col-reverse">
        <div className="flex-center relative flex-1 py-8 px-16 bg-white bg-[url(/assets/japanese_drinks.png)] bg-no-repeat bg-contain bg-center max-sm:w-full max-sm:bg-cover max-sm:p-16">
          <Image
            src={sushi4}
            alt="sushi4"
            data-aos="fade-right"
            className="w-[254px] h-[260px] object-contain max-sm:w-[70%] max-sm:h-[70%]"
          />

          <div className="absolute z-10 -top-[8px] left-[12%] max-sm:hidden">
            <Image
              src={arrowHorizontal}
              alt="arrow horizontal"
              className="w-auto h-full object-contain"
            />
          </div>

          <div className="absolute z-10 -right-[2.5px] bottom-[12%] max-sm:hidden">
            <Image
              src={arrowVertical}
              alt="arrow vertical"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <motion.div
          className="flex flex-1 justify-center flex-col py-8 px-16 max-sm:p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="sushi__subtitle">What’s Trending / トレンド</p>

          <h3 className="sushi__title">Japanese Drinks</h3>
          <p className="sushi__description">
            Feel the taste of the most delicious Japense drinks here.
          </p>

          <ul className="flex-between list-none flex-wrap gap-5">
            {trendingDrinks.map((drink, index) => (
              <li
                key={index}
                className="flex flex-1 items-center flex-row gap-3 min-w-[210px]"
              >
                <div className="w-[24px] h-[24px] rounded-full bg-primary-color flex-center">
                  <Image
                    src={check}
                    alt="check"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <p className="flex flex-1 text-base font-medium font-plus-jakarta-sans text-secondary-color">
                  {drink}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </section>
  );
};

export default Trending;
