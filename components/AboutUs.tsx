"use client";

import Image from "next/image";
import { arrowUpRight, sushi2, sushi3 } from "../assets";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us max-lg:flex-col">
      <div className="about-us__image max-lg:flex-row max-md:flex-col">
        {/* Sushi 3 Image & Background */}
        <motion.div // Animate this container when it scrolls into view
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Use whileInView to trigger on scroll
          viewport={{ once: true, amount: 0.5 }} // Play once, when 50% of element is visible
          transition={{ duration: 0.8, delay: 0.1 }}
          className="about-us__image-sushi3 max-lg:border-b-0 max-lg:border-r-8 max-lg:border-color-creamson max-md:border-b-8 max-md:border-r-0 max-sm:p-8"
          style={{
            backgroundImage: 'url("/assets/about_bg1.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={sushi3}
            alt="sushi"
            className="w-[225px] h-[200px] object-contain max-sm:w-1/2 max-sm:h-[160px]"
          />
        </motion.div>

        {/* Learn More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }} // Subtle hover effect
          whileTap={{ scale: 0.95 }} // Subtle tap effect
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }} // Trigger on scroll
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="about-us__button max-lg:hidden max-md:block max-md:top-[47%] max-sm:top-[44%]"
        >
          <span className="text-white font-medium text-lg">Learn More</span>
          <Image
            src={arrowUpRight}
            alt="learn more"
            className="object-contain"
          />
        </motion.button>

        {/* Sushi 2 Image & Background */}
        <motion.div // Animate this container when it scrolls into view
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} // Trigger on scroll
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-8 px-16 flex flex-1 items-center max-sm:p-8"
          style={{
            backgroundImage: 'url("/assets/about_bg2.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={sushi2}
            alt="sushi"
            priority={true}
            className="w-[240px] h-[160px] object-contain max-sm:w-1/2 max-sm:h-[160px]"
          />
        </motion.div>
      </div>

      {/* About Us Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger on scroll
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-1 flex-col justify-center"
      >
        <div className="p-16 max-sm:p-8">
          <p className="sushi__subtitle">About Us / 私たちに関しては</p>
          <h3 className="sushi__title">
            Our mission is to bring true Japanese flavours to you.
          </h3>
          <p className="sushi__description">
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customers.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
