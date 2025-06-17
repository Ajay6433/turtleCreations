import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Tyler Durden",
      image:
        "/corpOutdoor.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "/edu.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "/personalEvent.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "/outdoor.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Discover our event planning expertise—explore our services and memorable moments.
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <div className="relative h-80 w-67">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="320px"
              className="pointer-events-none object-cover"
              loading="lazy"
              quality={75}
            />
          </div>
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
