"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = {
  Case: [
    { label: "Dimensions", value: "33.7 mm x 25.5 mm" },
    { label: "Material", value: "Steel" },
    { label: "Crown", value: "Blue" },
    { label: "Water Resistance", value: "Up to ~30 meters" },
    { label: "Glass", value: "Glace Carrée Rect" },
    { label: "Case-Back Material", value: "Steel" },
    { label: "Case Thickness", value: "6.60 mm" },
  ],
  Movement: [
    { label: "Watch Function", value: "Hours, Minutes" },
    { label: "Winding", value: "Quartz movement" },
  ],
  Hands: [
    { label: "Hand Shape", value: "Swords" },
    { label: "Hand Color", value: "Blue" },
    { label: "Hand Material", value: "Acier non-allié C60 1.1221" },
  ],
};

export default function Specifications() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("Case");
  return (
    <section className="relative w-full min-h-fit bg-neutral-100 
      px-4 pt-14"
    >
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-2xl mx-auto">
      <div className="flex border-b overflow-x-scroll scrollbar-hide">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof tabs)}
            className={`text-lg px-4 py-2 nova font-semibold 
              uppercase transition-colors hover:cursor-pointer ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-neutral-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative min-h-[570px] sm:min-h-[370px] mt-6 ml-1">
        <AnimatePresence mode="wait">
          <div
            className="absolute w-full"
          >
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 tracking-wide">
              {tabs[activeTab].map((item) => (
                <div key={item.label}>
                  <dt className="font-semibold text-base uppercase text-neutral-600 nova">
                    {item.label}
                  </dt>
                  <dd className="text-neutral-900 capitalize text-lg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatePresence>
      </div>
      </motion.div>
    </section>
  );
}