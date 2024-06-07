import styles from "./About.module.css";


function Cards() {
  return (
    <div className="w-full px-16 h-screen flex items-center justify-center gap-5 bg-zinc-100">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full flex items-center justify-center bg-[#004D43]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ochi" />
                <button className={`${styles["animated-button"]} absolute  text-[1vw] w-fit bottom-6 left-7 border-[2px] border-[#89b65c] text-[#89b65c] font-semibold rounded-full py-1 px-2 uppercase`}>&copy;2019-2022</button>
        </div>


      </div>
      <div className="cardcontaine gap-5 h-[50vh] flex w-1/2">
        <div className="card flex justify-center items-center bg-[#192826] relative rounded-xl w-1/2 h-full">
        <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="ochi" />
                <button className={` ${styles["animated-button"]} text-[1vw] absolute bottom-6 left-7 border-[2px] border-white text-white font-semibold rounded-full py-1 px-2 uppercase`}>Rating 5.0 on clutch</button>
        </div>

        <div className="card relative flex items-center justify-center w-1/2 bg-[#212121] rounded-xl h-full">
        <img className="size-24" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="ochi" />
                <button className={` ${styles["animated-button"]} text-[1vw] w-fit absolute bottom-6 left-7 border-[2px] border-white text-white font-semibold rounded-full py-1 px-2 uppercase `}>business bootcamp alumini</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
