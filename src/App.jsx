import Navbar from "./Components/Navbar";
import Landingpage from "./Components/Landingpage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className="text-black w-full min-h-screen bg-[#F1F1F1]">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
