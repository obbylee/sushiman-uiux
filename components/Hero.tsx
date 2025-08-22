"use client";

import Image from "next/image";
import { playCircle, sushi1, user } from "@/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="hero max-lg:flex-col">
      {/* hero image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={sushi1} alt="sushi" priority={true} />

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          日 <br />
          本 <br />食
        </motion.h2>

        {/* hero image overlay */}
        <div className="hero-image__overlay"></div>
      </motion.div>

      {/* hero content */}
      <div className="hero-content">
        <motion.div // Animate the main content info
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-content-info max-sm:p-8"
        >
          <h1>Feel the taste of Japanese food</h1>
          <p>
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>

          <div className="hero-content__buttons">
            <motion.button
              whileHover={{ scale: 1.05 }} // Subtle hover effect
              whileTap={{ scale: 0.95 }} // Subtle tap effect
              className="hero-content__order-button"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-content__play-button"
            >
              <Image
                src={playCircle}
                alt="sushi"
                width={46}
                height={46}
                className="object-contain mr-3"
              />
              How to Order
            </motion.button>
          </div>
        </motion.div>

        {/* testimonial */}
        <motion.div // Animate the testimonial section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-content__testimonial"
        >
          <div className="hero-content__customer">
            <h4>
              24<span>k+</span>
            </h4>
            <p>Happy Customers</p>
          </div>

          <div className="hero-content__review">
            <Image
              src={user}
              alt="user"
              width={42}
              height={42}
              className="object-contain"
            />
            <p>
              &quot;This is the best Japanese food delivery service that ever
              existed.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
