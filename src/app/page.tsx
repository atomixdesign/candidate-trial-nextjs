import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Slider from "@/components/Slider/Slider";
import TeamSection from "@/components/TeamSection/TeamSection";
import ThreeColumn from "@/components/ThreeColumn/ThreeColumn";

export default function Home() {
    return (
        <div>
            <HomeBanner />
            <ThreeColumn />
            <Slider />
            <TeamSection />
        </div>
    );
}
