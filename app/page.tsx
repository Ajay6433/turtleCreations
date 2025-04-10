import HeroSection from "@/components/HeroSection";
import CorporatePartyCarousel from "@/components/CorporatePartyCarousel";
import Image from "next/image";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import EventStatsGrid from "@/components/EventStatsGrid";
import GlimpseHeading from "@/components/GlimpseHeading";
import ServicesHeading from "@/components/ServicesHeading";
import GlimpseCards from "@/components/GlimpseCards";

export default function Home() {
  return (
    // <MaxWidthContainer>
      <>
      <HeroSection/>
      <CorporatePartyCarousel/>
      <ServicesHeading/>
      <EventStatsGrid/>
      <GlimpseHeading/>
      <GlimpseCards/>
      </>
    // {/* // </MaxWidthContainer> */}
  );
}
