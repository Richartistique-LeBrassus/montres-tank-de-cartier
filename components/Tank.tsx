"use client";
import Specifications from "@/components/ui/Specifications";
import { Heart, Package, Share2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lightbox from "@/components/ui/Lightbox";

const Tank = () => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    { src: "/imgs/2.avif" },
    { src: "/imgs/main.avif" },
    { src: "/imgs/4.avif" },
    { src: "/imgs/3.jpg" },
    { src: "/imgs/j-boat.jpg" },
    { src: "/imgs/j-wind.avif" },
    { src: "/imgs/behind.jpg" },
    { src: "/imgs/j-relaxing.jpg" },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-neutral-50 text-neutral-900 w-full overflow-x-clip min-h-fit"
      >
        <div className="relative w-full h-[101vh] lg:h-[120vh]">
          <Image
            priority
            alt="bg"
            src="/imgs/j-meet-hd.jpg"
            height={810}
            width={1080}
            className="w-full h-full object-cover brightness-[75%] object-[65%] sm:object-[80%] lg:object-top xl:object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col w-full h-full justify-center items-center text-white"
          >
            <h1 className="drop-shadow-2xl nova italic text-center">
              <span className="italic text-2xl">&quot;The Kennedy Darling&apos;s&quot;</span>
            </h1>
            <p className="italic text-2xl">Ornament of Choice </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full mb-9 mt-20 max-w-[1440px] mx-auto">
          <p className="mx-8 text-base uppercase nova text-neutral-500 mb-4">
            <Link href="/" aria-label="Link to Home page.">
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <span className="px-2">/</span>
            <span className="font-bold text-black cursor-pointer">Tank</span>
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-fit w-full max-w-[1440px] mx-auto">
            <div className="w-full h-fit text-center sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full h-auto max-w-[700px]">
                <Image
                  priority
                  alt="bg"
                  src="/imgs/2.avif"
                  height={810}
                  width={1080}
                  className="w-full h-full object-cover brightness-90 object-[65%] sm:object-[80%] lg:object-top xl:object-cover cursor-pointer"
                  onClick={() => openLightbox(0)}
                />
              </motion.div>
            </div>

            <main className="min-h-screen text-neutral-900 flex flex-col items-center p-8">
              <motion.section            
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}     
                className="max-w-3xl w-full space-y-6">
                <h1 className="text-2xl nova font-extrabold uppercase">Tank Must SolarBeat™ Watch</h1>
                <p className={`text-xl leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
                  Tank Must watch, large model, photovoltaic SolarBeat™ movement. Steel case,
                  beaded crown set with a synthetic cabochon-shaped spinel, silvered dial,
                  blued-steel sword-shaped hands, black calfskin leather strap, steel ardillon
                  buckle. Case dimensions: 33.7 x 25.5 mm, thickness: 6.6 mm. Water-resistant
                  up to 3 bar (approx. 30 meters/100 feet).
                </p>
                <span
                  className="underline cursor-pointer text-sm"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Read Less" : "Read More"}
                </span>

                <h2 className="text-xl font-semibold">Cartier</h2>
                <ul className="space-y-3 font-semibold text-sm uppercase nova">
                  <li className="flex items-center gap-2">
                    <Package size={20} /> Complimentary shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingBag size={24} /> Complimentary returns and exchanges
                  </li>
                </ul>
                <p className="text-2xl font-semibold tracking-widest">$3597.91</p>
                <div className="flex flex-col gap-2 nova text-neutral-50 text-sm tracking-wide font-semibold">
                  <button
                    type="button"
                    className="w-full py-2 flex items-center justify-center gap-2 bg-neutral-900 uppercase border
                    hover:cursor-pointer duration-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors 
                    hover:border border-neutral-900"
                  >
                    Contact an ambassador
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 bg-neutral-900 uppercase hover:cursor-pointer duration-500 
                    hover:bg-neutral-50 hover:text-neutral-900 border
                    transition-colors hover:border border-neutral-900"
                  >
                    Add to Wish List
                  </button>
                </div>

                <p className="text-sm uppercase nova my-8">
                  For more information, Please call 00800101335
                </p>

                <div className="flex flex-wrap gap-4 text-lg underline cursor-pointer capitalize">
                  <span>Book an Appointment</span>
                  <span className="flex items-center gap-1">
                    <Share2 size={14} /> Share
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={14} /> Save
                  </span>
                </div>
                <p className="text-xs text-neutral-500">Ref. WSTA0090</p>
              </motion.section>
            </main>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 sm:mb-20 px-4 w-full h-full gap-5 justify-items-center"
            >
              {images.slice(1, 4).map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt=""
                  height={750}
                  width={750}
                  className="w-full sm:h-[30vh] lg:h-[35vh] sm:w-auto h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(i + 1)}
                />
              ))}
            </motion.div>
          </section>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full h-[60vh] max-w-[1440px] mx-auto px-4"
          >
            <Image   
              alt="bg"
              src="/imgs/j-boat.jpg"
              height={810}
              width={1080}
              className="w-full h-full object-cover brightness-90 grayscale-50
              object-[47%] sm:object-[80%] lg:object-top xl:object-cover"
              onClick={() => openLightbox(5)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 px-4 w-full h-full gap-24 max-w-[1440px] mx-auto"
          >
            <Image
              src="/imgs/j-wind.avif"
              alt=""
              height={995}
              width={639}
              className="w-full h-[45vh] object-contain cursor-pointer"
              onClick={() => openLightbox(5)}
            />
            <Image
              src="/imgs/behind.jpg"
              alt=""
              height={1281}
              width={975}
              className="w-full h-[45vh] md:h-[55vh] object-contain cursor-pointer"
              onClick={() => openLightbox(6)}
            />
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid grid-cols-1 md:grid-cols-2 w-full mt-12 mb-16 md:mb-20 h-fit"
          >
            <div className="relative w-full h-[40vh] lg:h-[50vh] max-w-[1440px] mx-auto mt-12 px-4">
              <Image
                src="/imgs/j-relaxing.jpg"
                alt=""
                fill
                className="w-full h-full object-cover brightness-90 grayscale-50 object-[65%] sm:object-[80%] lg:object-top xl:object-cover cursor-pointer"
                onClick={() => openLightbox(7)}
              />
            </div>
            <main className="flex flex-col items-center p-8 my-auto">
              <div className="mt-12 border-t pt-6 space-y-4 max-w-md">
                <h3 className="text-xl font-semibold nova uppercase">Cartier Care</h3>
                <p className="text-lg mt-2 text-neutral-700 font-bold capitalize tracking-wide leading-relaxed">
                  Please enjoy an extension of the International Limited Warranty for up to 8 years
                  and take advantage of a wide range of exclusive services.
                </p>
                <button type="button" className="text-lg mt-3 underline cursor-pointer">
                  Discover More
                </button>
              </div>
            </main>
          </motion.section>
          <Specifications />
        </div>
      </motion.div>

      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  );
};

export default Tank;