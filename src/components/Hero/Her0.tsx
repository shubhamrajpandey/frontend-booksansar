import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: ReactNode;
  desc: string;
  img: string;
}

const slides: Slide[] = [
  {
    title: (
      <>
        Buy and sell your <br />
        books <span className="text-[#C17100]">for the best prices</span>
      </>
    ),
    desc: "Find and trade books from your shelf, and snag deals on the books you want to read. Be part of the world's largest community of book lovers on BookSansar.",
    img: "/imgs/Hero-1.png",
  },
  {
    title: (
      <>
        Find your next favorite <br />
        <span className="text-[#C17100]">read, faster!</span>
      </>
    ),
    desc: "Thousands of handpicked books, from bestsellers to hidden gems — all in one place.",
    img: "/imgs/Hero-2.png",
  },
  {
    title: (
      <>
        Sell your books <br />
        with <span className="text-[#C17100]">ease, earn more!</span>
      </>
    ),
    desc: "Turn your shelves into cash. List your books quickly and reach thousands of customers.",
    img: "/imgs/Hero-3.png",
  },
];

export default function HeroSection(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Text slides from LEFT -> exits to LEFT
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      transition: { duration: 0.5, ease: "easeIn" } 
    },
  };

  // Image slides from RIGHT -> exits to RIGHT
  const imgVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      x: 100, 
      transition: { duration: 0.5, ease: "easeIn" } 
    },
  };

  return (
    <section className="bg-[#E4E4E7] w-full h-[718px] overflow-hidden">
      <div className="max-w-[1635px] mx-auto px-6 py-20 flex items-center justify-between gap-12">
        {/* Text & Search */}
        <div className="max-w-lg relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-[60px] font-[700] text-[#1E1B4B] leading-tight mb-4">
                {slides[current].title}
              </h1>
              <p className="text-[#1E1B4B] mb-6 text-[18px] font-[400] tracking-[0.4px] mt-7">
                {slides[current].desc}
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className=" mt-10 flex items-center border border-gray-400 w-full bg-white h-[40px] rounded-[10px] shadow-2xl px-3"
              >
                <Search className="text-gray-500 mr-2" />
                <input
                  className="w-full bg-transparent focus:outline-none placeholder-gray-400"
                  placeholder="Search for Books"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Image */}
        <div className="w-[500px] h-[500px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].img}
              alt={`Hero Slide ${current + 1}`}
              variants={imgVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}