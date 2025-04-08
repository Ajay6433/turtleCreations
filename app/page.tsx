import Main from "@/components/Main";
import HeroSection from "@/components/HeroSection";
import CorporatePartyCarousel from "@/components/CorporatePartyCarousel";
import Image from "next/image";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import EventStatsGrid from "@/components/EventStatsGrid";
import ServicesHeading from "@/components/ServicesHeading";

export default function Home() {
  return (
    // <MaxWidthContainer>
      <>
      <HeroSection/>
      <CorporatePartyCarousel/>
      <ServicesHeading/>
      <EventStatsGrid/>
      </>
    // {/* // </MaxWidthContainer> */}
  );
}
