import { motion, useAnimation } from "framer-motion";
import styles from "./About.module.css";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoveEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full px-16 py-24">
      <div className="w-full border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-[4vw] tracking-tight">Featured Projects</h1>
      </div>
      <div className="mt-20 cards flex gap-12 w-full">
        <div className="maincadrd-container h-[80vh] w-1/2">
          <motion.div className="cardContainer rounded-lg relative w-full h-[70vh]">
            <h1 className="absolute z-10 overflow-hidden flex left-full -translate-x-1/2 -translate-y-1/2 top-1/2  text-6xl font-semibold text-[#CDEA68] leading-none tracking-tighter ">
              {"FYDED".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.34, 1], delay: index * 0.03 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoveEnd(0)}
              className="card rounded-lg w-full h-full overflow-hidden "
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </motion.div>
          </motion.div>
          <div className="flex gap-2">
            {["Audit", "Copywriting", "sales deck", "slides design"].map(
              (item, index) => (
                <button
                  key={index}
                  className={`${styles["animated-button"]} flex items-center justify-center text-[1.05vw] w-fit animated-button bg-transparent border-[1px] uppercase border-zinc-900  rounded-full py-1 px-5 my-5 tracking-tighter font-semibold `}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <div className="maincadrd-container h-[80vh] w-1/2">
          <div className="cardContainer rounded-lg relative w-ful h-[70vh]">
            <h1 className="absolute z-10 flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-6xl font-semibold text-[#CDEA68] leading-none tracking-tighter ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.34, 1], delay: index * 0.03 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoveEnd(1)}
              className="card rounded-lg w-full h-full overflow-hidden "
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="flex gap-2">
            {["Agency", "company presentation"].map((item, index) => (
              <button
                key={index}
                className={`${styles["animated-button"]} flex items-center justify-center text-[1.05vw] w-fit border-[1px] uppercase border-zinc-900 rounded-full py-1 px-5 my-5 tracking-tighter font-semibold `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* //second box  */}
      <div className="mt-20 cards flex gap-12 w-full">
        <div className="w-1/2 maincadrd-container h-[70vh] rounded-lg">
          <div className="cardContainer  relative w-full h-[70vh]">
            <h1 className="absolute z-10 overflow-hidden flex left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-6xl font-semibold text-[#CDEA68] leading-none tracking-tighter ">
              {"TWARA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.34, 1], delay: index * 0.03 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoveEnd(2)}
              className="card rounded-lg overflow-hidden w-full h-full"
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="flex gap-2">
            {["brand identity", "design research", "investor deck"].map(
              (item, index) => (
                <button
                  key={index}
                  className={`${styles["animated-button"]} flex items-center justify-center text-[1.05vw] w-fit border-[1px] uppercase border-zinc-900 rounded-full py-1 px-5 my-5 tracking-tighter font-semibold `}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
        {/* 4ht one  */}

        <div className="maincadrd-container h-[80vh] w-1/2">
          <div className="cardContainer rounded-lg relative w-full h-[70vh]">
            <h1 className="absolute flex z-10 overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2  text-6xl w-3/4 font-semibold text-[#CDEA68] leading-none tracking-tighter ">
              {"PREMIUS BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.34, 1], delay: index * 0.03 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoveEnd(3)}
              className="card rounded-lg w-full h-full overflow-hidden "
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </motion.div>
          </div>
          <button className={`${styles["animated-button"]} flex items-center justify-center text-[1.05vw] w-fit border-[1px] border-zinc-900 rounded-full py-1 px-5 my-5 tracking-tighter font-semibold `}>
            BRANDED TEMPLATE
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center my-14">
        <button className={`flex items-center gap-8 px-[2vw] mt-[1vw] py-[1vw] text-[1.1vw] bg-[#212121] rounded-full text-[#DADADA] uppercase`}>
          View all case studies
          <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
        </button>
      </div>
    </div>
  );
}

export default Featured;
