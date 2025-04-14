import React from "react";
import GlimpseCard from "./GlimpseCard";

interface GlimpseCardData {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

const GlimpseCards: React.FC = () => {
  const glimpseCards: GlimpseCardData[] = [
    { id: 1, title: "About Occasion/Event", description: "About where and for whom you organised it", imgSrc: "/glimpse.png" },
        { id: 2, title: "About Occasion/Event", description: "About where and for whom you organised it", imgSrc: "/glimpse.png" },
        { id: 3, title: "About Occasion/Event", description: "About where and for whom you organised it", imgSrc: "/glimpse.png" },
        { id: 4, title: "About Occasion/Event", description: "About where and for whom you organised it", imgSrc: "/glimpse.png" },
        { id: 5, title: "About Occasion/Event", description: "About where and for whom you organised it", imgSrc: "/glimpse.png" },
        { id: 6, title: "About Occasion/Event", description: "About where and for whom you organised it", imgSrc: "/glimpse.png" },
  ];
  return (
    <div className="flex gap-4 w-[100vw] max-w-[1251px] mx-auto mt-10 px-4 lg:px-0">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 md:gap-6 w-full justify-items-center">
{glimpseCards.map((card) => (
          <GlimpseCard
            key={card.id}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default GlimpseCards;
