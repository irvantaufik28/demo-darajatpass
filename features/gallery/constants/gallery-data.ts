export const galleryCategories = [
  { id: "all", label: "Semua" },
  { id: "rooms", label: "Kamar" },
  { id: "pools", label: "Kolam Air Hangat" },
  { id: "resort", label: "Area Hotel" },
  { id: "experiences", label: "Aktivitas" },
  { id: "landscape", label: "Pemandangan" },
] as const;

export type GalleryCategoryId = (typeof galleryCategories)[number]["id"];
export type GalleryPhoto = {
  id: string;
  category: Exclude<GalleryCategoryId, "all">;
  categoryLabel: string;
  title: string;
  caption: string;
  description?: string;
  image: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { id: "waterpark", category: "pools", categoryLabel: "Kolam Air Hangat", title: "Kolam dan Waterpark Darajat Pass", caption: "Kolam dan Waterpark Darajat Pass", image: "/images/hero/darajat-pass-hero-01.png", alt: "Pemandangan dari atas kolam renang dan waterpark Darajat Pass" },
  { id: "premium-room", category: "rooms", categoryLabel: "Kamar", title: "Interior Kamar Premium", caption: "Kamar Premium Darajat Pass", image: "/images/rooms/34fa6412-487c-4afc-a3a4-b04dd7cd289f/02-room-overview.png", alt: "Interior kamar premium Darajat Pass dengan area duduk dan tempat tidur" },
  { id: "darajat-hillside", category: "landscape", categoryLabel: "Pemandangan", title: "Lanskap Darajat Pass", caption: "Lanskap Pegunungan Darajat", image: "/images/darajat-welcome.webp", alt: "Area perbukitan hijau dan tulisan Darajat Pass" },
  { id: "room-terrace", category: "rooms", categoryLabel: "Kamar", title: "Teras Kamar Premium", caption: "Teras Kamar Premium", description: "Ruang untuk bersantai di luar kamar", image: "/images/rooms/34fa6412-487c-4afc-a3a4-b04dd7cd289f/01-terrace.png", alt: "Teras kamar premium Darajat Pass" },
  { id: "poolside-hotel", category: "resort", categoryLabel: "Area Hotel", title: "Hotel dan Area Kolam", caption: "Suasana Hotel di Tepi Kolam", description: "Area hotel untuk menikmati suasana Darajat", image: "/images/hero/darajat-pass-hero-02.png", alt: "Bangunan hotel dan area duduk di tepi kolam Darajat Pass" },
  { id: "twin-room", category: "rooms", categoryLabel: "Kamar", title: "Kamar Twin Darajat Pass", caption: "Kamar dengan Dua Tempat Tidur", description: "Interior kamar twin dengan pencahayaan hangat", image: "/images/rooms/f54f7dc7-0a18-45d3-bc75-bb124d3d90bb/01-twin-room.png", alt: "Kamar Darajat Pass dengan dua tempat tidur terpisah" },
  { id: "resort-gardens", category: "landscape", categoryLabel: "Pemandangan", title: "Taman di Lereng Darajat", caption: "Taman dan Bangunan di Lereng Darajat", description: "Pemandangan area resor dari atas", image: "/images/hero/darajat-pass-hero-03.png", alt: "Taman bertingkat dan bangunan Darajat Pass di lereng bukit" },
  { id: "double-room", category: "rooms", categoryLabel: "Kamar", title: "Kamar Double Darajat Pass", caption: "Kamar dengan Tempat Tidur Double", description: "Suasana nyaman untuk beristirahat", image: "/images/rooms/cecdf003-e876-492f-a8c8-41574897d1e3/01-room.png", alt: "Kamar Darajat Pass dengan tempat tidur double dan jendela besar" },
  { id: "night-pool", category: "pools", categoryLabel: "Kolam Air Hangat", title: "Kolam Darajat pada Malam Hari", caption: "Suasana Kolam pada Malam Hari", description: "Pemandangan kolam setelah matahari terbenam", image: "/images/darajat-night-pool.webp", alt: "Kolam renang Darajat Pass dengan pencahayaan malam" },
  { id: "rainbow-slide", category: "experiences", categoryLabel: "Aktivitas", title: "Rainbow Slide Darajat Pass", caption: "Bermain di Rainbow Slide", description: "Seluncuran warna-warni di tengah taman Darajat", image: "/images/tourism/rainbow-slide-darajat.webp", alt: "Seluncuran Rainbow Slide warna-warni di Darajat Pass" },
  { id: "flying-fox", category: "experiences", categoryLabel: "Aktivitas", title: "Flying Fox Darajat Pass", caption: "Meluncur dengan Flying Fox", image: "/images/tourism/flying-fox-darajat.webp", alt: "Pengunjung bermain flying fox di atas area wisata Darajat Pass" },
  { id: "atv", category: "experiences", categoryLabel: "Aktivitas", title: "ATV Darajat Pass", caption: "Jelajahi Darajat dengan ATV", image: "/images/tourism/atv-darajat.webp", alt: "Pengunjung mengendarai ATV di kawasan Darajat" },
];
