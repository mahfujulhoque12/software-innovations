import { StaticImageData } from 'next/image';
import img1 from '/public/blog/2.jpg';
import img2 from '/public/blog/3.jpg';
import img3 from '/public/blog/4.jpg';
import user from '/public/blog/user.jpg';
import { NextResponse } from 'next/server';

export interface BlogItem {
  id: number
  img: StaticImageData
  title: string
  subTitle: string
  userImg: StaticImageData
  userName: string
  userTitle: string
  category: string;
  slug: string
  des1: string
  des2: string
  des3: string
  des4: string
}


 const blogListData:BlogItem[] = [
  {
    id: 1,
    img: img1,
    title: "Build a dynamic nature website",
    subTitle: "Nature",
    userImg: user,
    userName: "Baodn",
    userTitle: "I love Nature",
    category: "Popular",
    slug: "build-a-dynamic-nature-website",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 2,
    img: img2,
    title: "The art of clean code",
    subTitle: "Programming",
    userImg: user,
    userName: "Junaid",
    userTitle: "Fullstack Developer",
    category: "Trending",
    slug: "the-art-of-clean-code",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  
  },
  {
    id: 3,
    img: img3,
    title: "Mountain adventures and beyond",
    subTitle: "Travel",
    userImg: user,
    userName: "Alicia",
    userTitle: "Travel Blogger",
    category: "Following",
    slug: "mountain-adventures-and-beyond",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 4,
    img: img1,
    title: "Mastering Tailwind CSS in 2025",
    subTitle: "Web Dev",
    userImg: user,
    userName: "Omar",
    userTitle: "Frontend Dev",
    category: "Popular",
    slug: "mastering-tailwind-css-in-2025",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 5,
    img: img2,
    title: "Mindful morning rituals",
    subTitle: "Lifestyle",
    userImg: user,
    userName: "Fatima",
    userTitle: "Wellness Coach",
    category: "New",
    slug: "mindful-morning-rituals",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 6,
    img: img3,
    title: "Explore the wild coastlines",
    subTitle: "Nature",
    userImg: user,
    userName: "Liam",
    userTitle: "Photographer",
    category: "New",
    slug: "explore-the-wild-coastlines",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 7,
    img: img1,
    title: "React vs Vue: A 2025 Perspective",
    subTitle: "Tech",
    userImg: user,
    userName: "Sophia",
    userTitle: "JS Enthusiast",
    category: "Trending",
    slug: "react-vs-vue-a-2025-perspective",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 8,
    img: img2,
    title: "Deep dive into Redux Toolkit",
    subTitle: "Programming",
    userImg: user,
    userName: "Zahid",
    userTitle: "Software Engineer",
    category: "Following",
    slug: "deep-dive-into-redux-toolkit",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 9,
    img: img3,
    title: "Green cities of the future",
    subTitle: "Environment",
    userImg: user,
    userName: "Emily",
    userTitle: "Eco Architect",
    category: "Popular",
    slug: "green-cities-of-the-future",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
  {
    id: 10,
    img: img1,
    title: "Hiking the Himalayan trails",
    subTitle: "Adventure",
    userImg: user,
    userName: "Nashit",
    userTitle: "Explorer",
    category: "New",
    slug: "hiking-the-himalayan-trails",
    des1: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop containing Lorem Ipsum passages, and more recently",

    des2: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    des3: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",

    des4: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop .",
  },
];

export async function GET() {
  return NextResponse.json(blogListData);
}
