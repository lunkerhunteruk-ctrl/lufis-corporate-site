export interface Project {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  period: string;
  tags: string[];
  thumbnail: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "pitareci",
    name: "Pitareci",
    nameJa: "ピタレシ",
    description:
      "AIが冷蔵庫の食材からレシピを提案。写真を撮るだけで献立が決まるスマートレシピアプリ。",
    period: "2024.06 - 2024.09",
    tags: ["Next.js", "OpenAI API", "Stripe", "Supabase"],
    thumbnail: "/images/pitareci.svg",
    url: "https://lufis.co.jp/pitareci/",
  },
  {
    id: "mapika",
    name: "Mapika",
    nameJa: "マピカ",
    description:
      "位置情報を活用したインタラクティブマップサービス。地域情報をリアルタイムで可視化。",
    period: "2024.10 - 2025.01",
    tags: ["React", "Mapbox GL", "Node.js", "PostgreSQL"],
    thumbnail: "/images/mapika.svg",
  },
  {
    id: "marchelink",
    name: "MarcheLink",
    nameJa: "マルシェリンク",
    description:
      "生産者と消費者をつなぐマルシェプラットフォーム。EC機能とコミュニティを融合。",
    period: "2025.02 - 2025.05",
    tags: ["Next.js", "Stripe Connect", "Firebase", "Tailwind"],
    thumbnail: "/images/marchelink.svg",
  },
];
