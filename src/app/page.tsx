import Image from "next/image";
import TeamSection from "./components/TeamSection/TeamSection";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import ThreeColumn from "./components/ThreeColumnSection/ThreeColumnSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <HomeBanner />
      <ThreeColumn />
      <Carousel />
      <TeamSection />
      <Footer />
    </div>
  );
}
