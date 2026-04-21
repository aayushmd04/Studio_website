import albumNeonShadows from "@/assets/album-neon-shadows.jpg";
import albumMidnightEcho from "@/assets/album-midnight-echo.jpg";
import albumSilentThunder from "@/assets/album-silent-thunder.jpg";
import albumCosmicDrift from "@/assets/album-cosmic-drift.jpg";
import albumLostHorizon from "@/assets/album-lost-horizon.jpg";
import albumElectricDreams from "@/assets/album-electric-dreams.jpg";
import merchVinyl from "@/assets/merch-vinyl.jpg";
import merchCD from "@/assets/merch-cd.jpg";
import merchTshirt from "@/assets/merch-tshirt.jpg";
import merchHoodie from "@/assets/merch-hoodie.jpg";
import merchPoster from "@/assets/merch-poster.jpg";
import merchCassette from "@/assets/merch-cassette.jpg";

export interface Release {
  slug: string;
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
}

export interface Product {
  slug: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export interface VideoItem {
  slug: string;
  title: string;
  type: string;
  duration: string;
  image: string;
}

export interface TourDate {
  id: string;
  date: string;
  month: string;
  day: number;
  city: string;
  state: string;
  venue: string;
  eventName: string;
  status: "available" | "sold-out" | "presale";
}

export const releases: Release[] = [
  { slug: "neon-shadows", title: "Neon Shadows", type: "LP", year: 2024, description: "Our latest full-length exploration of urban isolation and digital connection", image: albumNeonShadows },
  { slug: "midnight-echo", title: "Midnight Echo", type: "Album", year: 2023, description: "Ten tracks recorded live in a single night, capturing raw emotion", image: albumMidnightEcho },
  { slug: "silent-thunder", title: "Silent Thunder", type: "Single", year: 2024, description: "A haunting meditation on unspoken words and missed moments", image: albumSilentThunder },
  { slug: "cosmic-drift", title: "Cosmic Drift", type: "EP", year: 2022, description: "Four-track journey through space and introspection", image: albumCosmicDrift },
  { slug: "lost-horizon", title: "Lost Horizon", type: "Mixtape", year: 2023, description: "Experimental collection featuring collaborations and remixes", image: albumLostHorizon },
  { slug: "electric-dreams", title: "Electric Dreams", type: "Album", year: 2021, description: "Debut album that launched our sonic exploration", image: albumElectricDreams },
];

export const products: Product[] = [
  { slug: "neon-shadows-vinyl", title: '"Neon Shadows" Vinyl', category: "Vinyl", description: "180g black vinyl with exclusive poster insert. Limited to 1,000 copies.", price: "$29.99", image: merchVinyl },
  { slug: "midnight-echo-cd", title: '"Midnight Echo" CD', category: "CD", description: "Enhanced packaging with 12-page booklet and bonus track", price: "$14.99", image: merchCD },
  { slug: "tour-2024-tshirt", title: "Tour 2024 T-Shirt", category: "Apparel", description: "100% cotton tee with tour dates on back", price: "$35.00", image: merchTshirt },
  { slug: "logo-hoodie", title: "Band Logo Hoodie", category: "Apparel", description: "Premium heavyweight hoodie with embroidered logo", price: "$65.00", image: merchHoodie },
  { slug: "cosmic-drift-poster", title: '"Cosmic Drift" Poster', category: "Print", description: "18×24 hand-numbered art print, signed by band", price: "$25.00", image: merchPoster },
  { slug: "electric-dreams-cassette", title: '"Electric Dreams" Cassette', category: "Cassette", description: "Limited run of 500, includes digital download code", price: "$12.99", image: merchCassette },
];

export const videos: VideoItem[] = [
  { slug: "silent-thunder-mv", title: '"Silent Thunder" Official Music Video', type: "Music Video", duration: "3:45", image: albumSilentThunder },
  { slug: "midnight-echo-live", title: '"Midnight Echo" Live Session', type: "Live Session", duration: "4:12", image: albumMidnightEcho },
  { slug: "electric-dreams-bts", title: '"Electric Dreams" Behind the Scenes', type: "Behind the Scenes", duration: "6:20", image: albumElectricDreams },
  { slug: "neon-shadows-lyric", title: '"Neon Shadows" Lyric Video', type: "Lyric Video", duration: "3:58", image: albumNeonShadows },
  { slug: "tour-diary-2023", title: "Tour Diary 2023", type: "Documentary", duration: "12:45", image: albumLostHorizon },
  { slug: "cosmic-drift-live", title: '"Cosmic Drift" Live at Red Rocks', type: "Live Performance", duration: "18:30", image: albumCosmicDrift },
];

export const tourDates: TourDate[] = [
  { id: "1", date: "2024-03-15", month: "MAR", day: 15, city: "Brooklyn", state: "NY", venue: "Brooklyn Steel", eventName: "Spring Awakening Tour", status: "available" },
  { id: "2", date: "2024-03-22", month: "MAR", day: 22, city: "Los Angeles", state: "CA", venue: "The Wiltern", eventName: "West Coast Sessions", status: "available" },
  { id: "3", date: "2024-04-05", month: "APR", day: 5, city: "Chicago", state: "IL", venue: "Metro Chicago", eventName: "Midwest Thunder", status: "available" },
  { id: "4", date: "2024-04-12", month: "APR", day: 12, city: "Austin", state: "TX", venue: "Mohawk Austin", eventName: "Southern Nights", status: "sold-out" },
  { id: "5", date: "2024-04-20", month: "APR", day: 20, city: "Seattle", state: "WA", venue: "The Showbox", eventName: "Pacific Northwest Run", status: "presale" },
  { id: "6", date: "2024-05-03", month: "MAY", day: 3, city: "Portland", state: "OR", venue: "Crystal Ballroom", eventName: "Rose City Show", status: "available" },
];
