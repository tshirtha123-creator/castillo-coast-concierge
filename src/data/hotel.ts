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
    id: "apartment-1",
    title: "Apartment 1",
    shortDescription: "Cozy bedroom with warm Moroccan decor and traditional charm.",
    description: "Apartment 1 features a cozy bedroom with vibrant Moroccan decor, a comfortable double bed, and warm ambient lighting. The room is adorned with traditional artwork and offers a welcoming atmosphere for a relaxing stay.",
    capacity: 2,
    image: apartment1,
    amenities: ["Wi-Fi", "Air Conditioning", "Safe", "Flat-screen TV"],
    features: ["Double Bed", "Moroccan Decor", "Bedside Tables", "Warm Ambiance"],
  },
  {
    id: "apartment-2",
    title: "Apartment 2",
    shortDescription: "Traditional Moroccan kitchen and dining with artisanal tiles.",
    description: "Apartment 2 offers a beautifully decorated space with traditional Moroccan tiles, a fully equipped kitchen, dining area, and comfortable seating. The vibrant colors and authentic craftsmanship create a unique living experience.",
    capacity: 4,
    image: apartment2,
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Refrigerator", "Safe", "Flat-screen TV"],
    features: ["Full Kitchen", "Dining Area", "Moroccan Tiles", "Living Space"],
  },
  {
    id: "apartment-3",
    title: "Apartment 3",
    shortDescription: "Spacious living room with traditional Moroccan seating and decor.",
    description: "Apartment 3 features a large traditional Moroccan living room with comfortable floor seating, ornate lanterns, and beautiful tile work. The warm orange tones and authentic artwork create an inviting space for families and groups.",
    capacity: 4,
    image: apartment3,
    amenities: ["Wi-Fi", "Air Conditioning", "Safe", "Flat-screen TV"],
    features: ["Traditional Seating", "Dining Area", "Moroccan Lanterns", "Spacious Layout"],
  },
  {
    id: "apartment-4",
    title: "Apartment 4",
    shortDescription: "Comfortable bedroom with elegant decor and natural light.",
    description: "Apartment 4 offers a comfortable bedroom with a double bed, warm earth-tone walls, and beautiful natural light filtering through colorful curtains. The room features traditional artwork and a relaxing ambiance.",
    capacity: 2,
    image: apartment4,
    amenities: ["Wi-Fi", "Air Conditioning", "Safe", "Flat-screen TV"],
    features: ["Double Bed", "Natural Light", "Bedside Tables", "Cozy Atmosphere"],
  },
  {
    id: "apartment-5",
    title: "Apartment 5",
    shortDescription: "Blue-themed apartment with kitchen, dining, and living areas.",
    description: "Apartment 5 is a vibrant blue-themed space featuring a fully equipped kitchen with traditional wooden cabinetry, a dining area, and a comfortable Moroccan-style living area. The artisanal tiles and colorful decor make it a standout choice.",
    capacity: 4,
    image: apartment5,
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Refrigerator", "Safe", "Flat-screen TV"],
    features: ["Full Kitchen", "Dining Area", "Living Space", "Moroccan Tiles"],
  },
  {
    id: "apartment-6",
    title: "Apartment 6",
    shortDescription: "Green-toned living space with Moroccan tiles and traditional seating.",
    description: "Apartment 6 features a spacious green-toned living area with traditional Moroccan seating, intricate blue and white tile work, and authentic artwork. The warm lighting and handcrafted details create a truly memorable stay.",
    capacity: 4,
    image: apartment6,
    amenities: ["Wi-Fi", "Air Conditioning", "Safe", "Flat-screen TV"],
    features: ["Traditional Seating", "Dining Area", "Moroccan Tiles", "Spacious Layout"],
  },
];

export const WHATSAPP_NUMBER = "212622330961";
export const HOTEL_EMAIL = "castillodalilah65@gmail.com";
export const HOTEL_ADDRESS = "El Ouatia, Tan-Tan, Morocco";
export const HOTEL_COORDS = { lat: 28.5022681, lng: -11.32893 };

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
