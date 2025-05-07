import { NextResponse } from "next/server";

export interface ReviewType  {
  id: number;
  title: string;
  designation: string;
  des: string;
}

 const reviewData: ReviewType[] = [
  {
    id: 1,
    title: "Sara Khan",
    designation: "CEO of TechNova",
    des: "Software Innovations delivered an impeccable web application on time and under budget. Their team was responsive, attentive to our needs, and provided great post-launch support. Highly recommend!",
  },
  {
    id: 2,
    title: "Arif Rahman",
    designation: "Founder of GreenLeaf Apps",
    des: "We engaged Software Innovations for a cross-platform mobile app. From design to deployment, they exceeded expectations—intuitive UI, rock-solid performance, and seamless App Store submission.",
  },
  {
    id: 3,
    title: "Nadia Ahmed",
    designation: "Marketing Lead at BrightVision",
    des: "Their video editing services took our product demos to the next level. Crisp cuts, professional color grading, and perfectly timed motion graphics—our engagement metrics have soared.",
  },
  {
    id: 4,
    title: "Javed Islam",
    designation: "CTO of FinEdge Solutions",
    des: "The custom CMS they built on WordPress with e-commerce integration has transformed our online sales. Fast load times, easy content updates, and rock-solid security.",
  },
  {
    id: 5,
    title: "Tania Begum",
    designation: "COO of HealthLink",
    des: "Exceptional back-end development in Node.js and Go. Our data processing pipeline now handles 10× the load with zero downtime—thanks to their scalable architecture.",
  },
  {
    id: 6,
    title: "Riaz Uddin",
    designation: "Head of API Integrations at PayStream",
    des: "Software Innovations’ API integration work was flawless. Their team connected multiple payment gateways and analytics platforms without a hitch—and delivered thorough documentation.",
  },
  {
    id: 7,
    title: "Leena Roy",
    designation: "Head of UX at ShopEase",
    des: "Their UI/UX design process was top-notch: user research, rapid prototyping, and iterative testing. Our new storefront sees a 25% increase in conversions already.",
  },
  {
    id: 8,
    title: "Munir Hossain",
    designation: "Entrepreneur",
    des: "Great experience overall. From initial discovery to final deployment, Software Innovations guided us expertly—our new platform has become a core part of our business.",
  }
];

export async function GET() {
  return NextResponse.json(reviewData);
}
