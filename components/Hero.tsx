"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 10,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 2,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}      
      className="relative w-full h-[120vh] text-stone-50 
      px-6 md:px-8 lg:px-[97px]"
    >
      <Link href="/pr" aria-label="Link to Tank product page.">
        <div className="absolute inset-0">
          <Image
            alt="Jackie Kennendy wearing her Cartier Tank."
            height={1085}
            width={1600}
            src="/imgs/cartier.webp"
            className="h-full w-full object-cover object-[60%]"
          />
        <div 
          className="absolute inset-x-0 bottom-0 
          h-32 bg-gradient-to-t from-black/70 to-transparent 
          pointer-events-none" 
        />
      </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center w-full drop-shadow-2xl
            h-[85%] text-center  
            md:pb-40 lg:pb-0 lg:items-center lg:top-20"
        >
          <div className="space-y-2 text-left
              md:max-w-[55vw]
              lg:max-w-[30vw]"> 
            <h1 className="text-[40px] 
              mb-5 md:mb-9 
              capitalize monte text-white">
                The tank Heroine
            </h1> 
              <div className="group flex flex-col items-center w-fit gap-4 mx-auto">
                <button 
                  className="font-semibold uppercase text-xs nova hover:cursor-pointer">
                  Discover More
                </button>
              </div>    
          </div>
        </motion.div>
      </Link>
    </motion.section>
  );
};

export default Hero