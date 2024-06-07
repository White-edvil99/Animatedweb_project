import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import styles from "./About.module.css";

function Landingpage() {
  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full h-screen bg-[#F1F1F1] border-t-2 pt-1">
      <div className="textstructure mt-44 px-16">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1}}
                    className="w-[7vw] h-[5vw] bg-green-500 relative top-[0.4vw] mr-[1vw] rounded-md"
                  ></motion.div>
                )}
                <h1 className="flex items-center text-[7vw] leading-[6.5vw] tracking-tighter font-['Founders_Grotesk_X-Cond Bold'] uppercase font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center px-16 py-3">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-md font-normal">
            {item}
          </p>
        ))}

        <div className="start flex gap-2 items-center">
          <div className={`${styles["animated-button"]} px-6 py-1 border-[1px] border-zinc-900 rounded-full text-[1.1vw]  font-normal uppercase`}>
            Start the project
          </div>
          <div className={`w-8 h-8 rounded-full border-[1px]  border-zinc-900 flex items-center justify-center `}>
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
