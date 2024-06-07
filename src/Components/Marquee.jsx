import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".9" className="w-full py-20 rounded-t-3xl bg-[#004D43] text-white">
      <div className="flex whitespace-nowrap gap-5 text border-t-2 border-b-2 mt-[3vw] border-zinc-300 overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none font-['Founders_Grotesk_X-Cond Bold'] uppercase font-bold "
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none font-['Founders_Grotesk_X-Cond Bold'] uppercase font-bold "
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none font-['Founders_Grotesk_X-Cond Bold'] uppercase font-bold ">
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
