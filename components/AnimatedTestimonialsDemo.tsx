import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
  {
    quote:
      "Our company’s annual gala was flawless thanks to their team. Every detail, from decor to timing, was handled professionally.",
    name: "Sarah Chen",
    designation: "Events Head at ApexCorp",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote:
      "They made our wedding day magical. From the stunning setup to seamless coordination, everything felt like a dream.",
    name: "Michael Rodriguez",
    designation: "Groom & Client",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote:
      "We hosted a community cultural night with over 300 guests. They nailed every aspect—from stage lighting to food stalls!",
    name: "Emily Watson",
    designation: "Coordinator, Kala Sangam Foundation",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote:
      "I was blown away by the creativity and professionalism. My daughter’s birthday party looked like something out of a movie!",
    name: "James Kim",
    designation: "Happy Parent",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote:
      "This team is pure gold. Punctual, organized, and incredibly imaginative. Our product launch event was a total success.",
    name: "Lisa Thompson",
    designation: "Marketing Director at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
