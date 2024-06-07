import styles from "./About.module.css";

function About() {
  return (
    <div className="w-full p-20 px-16 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className=" text-[4vw] leading-[3.6vw] font-['Neue Montreal'] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div
        className={`border-t-[1px] border-zinc-400 mt-16 flex justify-between py-3`}
      >
        <div className="w-[40vw]">
          <p className="text-md font-normal">What you can expect:</p>
        </div>
        <div className="w-[20vw] text-md">
          <p className="font-['Neue Montreal'] ">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether its live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="text-md px-2 font-['Neue Montreal'] mt-[2vw]">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="mt-[5vw] mr-32">
          <p className="mb-5">S:</p>
          {["Instagram", "Behance", "Facebook", "Linkind"].map(
            (item, index) => (
              <a
                key={index}
                className={`${styles["media"]} w-fit tracking-tight flex text-lg  flex-col"  `}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>

      <div className={`w-full border-t-[1px] border-[#a1b562] mt-20 flex justify-between gap-5 py-3`}
      >
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <button className="flex items-center gap-8 px-[2vw] mt-[1vw] py-[1vw] text-[1.1vw] bg-[#212121] rounded-full text-[#DADADA] uppercase">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="w-1/2 h-[60vh] rounded-3xl bg-[#b0c859]" />
           
      </div>
    </div>
  );
}

export default About;
