import HeroSection from "@/components/HeroSection";
import CorporatePartyCarousel from "@/components/CorporatePartyCarousel";
import EventStatsGrid from "@/components/EventStatsGrid";
import GlimpseHeading from "@/components/GlimpseHeading";
import ServicesHeading from "@/components/ServicesHeading";
import SendMessage from "@/components/SendMessage";
import {DraggableCardDemo} from "@/components/DraggableCardDemo";
import {AnimatedTestimonialsDemo} from "@/components/AnimatedTestimonialsDemo";
import ReviewsHeading from "@/components/ReviewsHeading";

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
      <ReviewsHeading/>
      <AnimatedTestimonialsDemo/>
      <SendMessage/>
      </>
  );
}
