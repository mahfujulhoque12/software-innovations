import { StaticImageData } from "next/image";

export interface ProductTypes {
  id: number;
  img: string;
  title: string;
  discount:string;
}


export interface FeatureProduct {
  id: number;
  img: StaticImageData | string;
  title: string;
  rating: number;
  reviews: number;
  sold: number;
  total: number;
  originalPrice: number;
  discountedPrice: number;
  type: string;
  description: string;
  ratingPoint: number;
  category: string;
  brand: string;
  features: string;
  condition: string;
}