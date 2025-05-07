// src/app/api/deals/route.ts
import { NextResponse } from "next/server";
import img1 from '/public/deals/card1.png';
import img2 from '/public/deals/card2.png';
import img3 from '/public/deals/card3.png';


const datas = [
  {
    id: 1,
    img: img1,
    title: "Smart Chair",
    discount: "-25%",
  },
  {
    id: 2,
    img: img2,
    title: "Smart Table",
    discount: "-20%",
  },
  {
    id: 3,
    img: img3,
    title: "Smart Chair",
    discount: "-25%",
  },
  {
    id: 4,
    img: img1,
    title: "Smart Chair",
    discount: "-80%",
  },
  {
    id: 5,
    img: img2,
    title: "Smart Chair",
    discount: "-25%",
  },
  {
    id: 6,
    img: img2,
    title: "Smart Chair",
    discount: "-25%",
  },
  {
    id: 7,
    img: img2,
    title: "Smart Chair",
    discount: "-25%",
  },
];

export async function GET() {
  return NextResponse.json(datas);
}
