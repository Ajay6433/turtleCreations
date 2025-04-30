import HeroSection from "@/components/HeroSection";
import CorporatePartyCarousel from "@/components/CorporatePartyCarousel";
import Image from "next/image";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import EventStatsGrid from "@/components/EventStatsGrid";
import GlimpseHeading from "@/components/GlimpseHeading";
import ServicesHeading from "@/components/ServicesHeading";
import GlimpseCards from "@/components/GlimpseCards";
import SendMessage from "@/components/SendMessage";
import {DraggableCardDemo} from "@/components/DraggableCardDemo";

export default function Home() {
  return (
      <>
      <HeroSection/>
      <CorporatePartyCarousel/>
      <ServicesHeading/>
      <EventStatsGrid/>
      <GlimpseHeading/>
      {/* <GlimpseCards/> */}
      <DraggableCardDemo/>
      <SendMessage/>
      </>
  );
}
