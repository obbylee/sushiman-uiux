"use client";

import { motion } from "motion/react";

const Subscribe = () => {
  return (
    <section
      id="services"
      className="flex-center p-16 bg-primary-color bg-[url(/assets/subscribe_bg.png)] bg-center bg-no-repeat bg-contain flex-col overflow-hidden max-sm:py-16 max-sm:px-8"
    >
      <motion.h2
        className="text-8xl font-playfair-display font-semibold text-white text-center max-sm:text-6xl max-sm:leading-relaxed"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Get offers stright <br /> to your inbox
      </motion.h2>

      <motion.p
        className="text-lg font-plus-jakarta-sans font-light mt-8 text-white/80"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Sign up for the sushiman newsletter
      </motion.p>

      <motion.div
        className="min-w-[480px] mt-10 py-4 pr-4 pl-6 flex gap-2.5 border-2 border-white/10 rounded-[46px] max-sm:flex-col max-sm:gap-5 max-sm:min-w-full max-sm:p-0 max-sm:border-none max-sm:rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <input
          type="text"
          placeholder="Enter your email address"
          className="flex flex-1 placeholder:text-white text-base font-normal font-plus-jakarta-sans text-white opacity-50 bg-transparent border-none outline-none max-sm:min-h-[50px] max-sm:border-white max-sm:border-solid max-sm:py-2.5 max-sm:px-5 max-sm:rounded-3xl"
        />
        <button className="p-5 min-w-[180px] text-base font-medium text-white font-plus-jakarta-sans text-center bg-black-400 rounded-[46px] border-none outline-none cursor-pointer max-sm:min-w-full">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Subscribe;
