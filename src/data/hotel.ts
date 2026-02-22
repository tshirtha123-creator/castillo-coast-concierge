import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import apartment4 from "@/assets/apartment-4.jpg";
import apartment5 from "@/assets/apartment-5.jpg";
import apartment6 from "@/assets/apartment-6.jpg";

export interface Apartment {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  capacity: number;
  image: string;
  amenities: string[];
  features: string[];
}

export const apartments: Apartment[] = [
  {
    id: "ocean-view-suite",
    title: "Ocean View Suite",
    shortDescription: "Wake up to breathtaking Atlantic views in our signature suite.",
    description: "Our Ocean View Suite offers an unparalleled experience with panoramic views of the Atlantic Ocean. Featuring a king-size bed with premium linens, a private balcony, and elegant Moroccan-inspired decor. The suite includes a spacious living area, a luxurious bathroom with rain shower, and all modern amenities for a perfect coastal retreat.",
    capacity: 4,
    image: apartment1,
    amenities: ["Wi-Fi", "Air Conditioning", "Mini Bar", "Room Service", "Safe", "Flat-screen TV"],
    features: ["Ocean View Balcony", "King Bed", "Rain Shower", "Living Area", "55m²"],
  },
  {
    id: "family-beach-apartment",
    title: "Family Beach Apartment",
    shortDescription: "Spacious living for the whole family with stunning sea views.",
    description: "Our Family Beach Apartment is designed for families seeking comfort and space. With a large open-plan living room, fully equipped kitchenette, and a separate sleeping area, this apartment provides everything you need for an unforgettable family holiday by the sea. Enjoy the private terrace with ocean views.",
    capacity: 4,
    image: apartment2,
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Washing Machine", "Safe", "Flat-screen TV"],
    features: ["Sea View Terrace", "2 Bedrooms", "Full Kitchen", "Living Room", "75m²"],
  },
  {
    id: "premium-coastal-room",
    title: "Premium Coastal Room",
    shortDescription: "Elegant comfort with Moroccan flair and ocean breezes.",
    description: "The Premium Coastal Room blends traditional Moroccan craftsmanship with modern luxury. Featuring handcrafted furniture, artisanal tiles, and a private balcony overlooking the coastline. This room offers a perfect blend of authenticity and comfort with a king bed, premium bathroom, and personalized service.",
    capacity: 2,
    image: apartment3,
    amenities: ["Wi-Fi", "Air Conditioning", "Mini Bar", "Room Service", "Safe", "Flat-screen TV"],
    features: ["Coastal View", "King Bed", "Moroccan Decor", "Balcony", "40m²"],
  },
  {
    id: "deluxe-panoramic-suite",
    title: "Deluxe Panoramic Suite",
    shortDescription: "Our most spacious suite with 180° ocean panorama.",
    description: "The Deluxe Panoramic Suite is our crown jewel, offering 180-degree panoramic views of the Atlantic. This expansive suite features a separate living room, dining area, master bedroom with en-suite bathroom, and a wraparound terrace. Every detail has been curated for the ultimate luxury coastal experience.",
    capacity: 4,
    image: apartment4,
    amenities: ["Wi-Fi", "Air Conditioning", "Mini Bar", "Room Service", "Safe", "Flat-screen TV", "Espresso Machine"],
    features: ["Panoramic View", "King Bed", "Wraparound Terrace", "Dining Area", "90m²"],
  },
  {
    id: "sunset-penthouse",
    title: "Sunset Penthouse",
    shortDescription: "The pinnacle of luxury with floor-to-ceiling sunset views.",
    description: "Our exclusive Sunset Penthouse sits atop Hotel Castillo Dalilah, offering unmatched views of the Atlantic sunset. Floor-to-ceiling windows, a premium king bed, a sitting area, and a private rooftop terrace make this our most sought-after accommodation. Experience the magic of Moroccan sunsets from the comfort of pure luxury.",
    capacity: 2,
    image: apartment5,
    amenities: ["Wi-Fi", "Air Conditioning", "Mini Bar", "Room Service", "Safe", "Flat-screen TV", "Espresso Machine", "Jacuzzi"],
    features: ["Rooftop Terrace", "King Bed", "Floor-to-ceiling Windows", "Jacuzzi", "65m²"],
  },
  {
    id: "cozy-studio-retreat",
    title: "Cozy Studio Retreat",
    shortDescription: "Intimate and charming, perfect for couples or solo travelers.",
    description: "The Cozy Studio Retreat offers an intimate, well-appointed space perfect for couples or solo travelers. Featuring a comfortable double bed, a small kitchenette, and Moroccan decorative touches throughout. Despite its compact size, the studio includes all modern amenities and a window with ocean views.",
    capacity: 2,
    image: apartment6,
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchenette", "Safe", "Flat-screen TV"],
    features: ["Ocean View Window", "Double Bed", "Kitchenette", "Moroccan Decor", "30m²"],
  },
];

export const WHATSAPP_NUMBER = "212600000000"; // Replace with actual number
export const HOTEL_EMAIL = "castillodalilah65@gmail.com";
export const HOTEL_ADDRESS = "El Ouatia, Tan-Tan, Morocco";
export const HOTEL_COORDS = { lat: 28.6024, lng: -10.0667 };

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
