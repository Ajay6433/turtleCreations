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
    { id: 1, title: "Card 1", description: "Description 1", imgSrc: "/glimpse.png" },
        { id: 2, title: "Card 2", description: "Description 2", imgSrc: "/glimpse.png" },
        { id: 3, title: "Card 3", description: "Description 3", imgSrc: "/glimpse.png" },
        { id: 4, title: "Card 4", description: "Description 4", imgSrc: "/glimpse.png" },
        { id: 5, title: "Card 5", description: "Description 5", imgSrc: "/glimpse.png" },
        { id: 6, title: "Card 6", description: "Description 6", imgSrc: "/glimpse.png" },
  ];
  return (
    <div className="flex items-center justify-center w-[100vw] max-w-[1251px] mx-auto mt-10 px-4 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-[800px]">
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
