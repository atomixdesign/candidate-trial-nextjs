'use client'
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import CarousalSection from "@/components/CarouselSection/CarouselSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import ThreeColumn from "@/components/ThreeColumn/ThreeColumn";

export default function Home() {
    return (
        <div>
            <HomeBanner />
            <ThreeColumn />
            <CarousalSection />
            <TeamSection />
        </div>
    );
}
