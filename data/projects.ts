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
    thumbnail: "/screenshots/01.png",
    url: "https://lufis.co.jp/pitareci/",
  },
  {
    id: "mapika",
    name: "Mapika",
    nameJa: "マピカ",
    description:
      "民泊ホスト向け清掃クルーマッチングプラットフォーム。AI品質管理、Stripe決済、iCal自動連携で運営を効率化。",
    period: "2024.10 - 2025.01",
    tags: ["LINE LIFF", "Firebase", "Stripe Connect", "Vertex AI"],
    thumbnail: "/images/mapika.svg",
  },
  {
    id: "marchelink",
    name: "Marche-Link",
    nameJa: "マルシェリンク",
    description:
      "生産者と消費者をつなぐマルシェプラットフォーム。EC機能とコミュニティを融合。",
    period: "2025.02 - 2025.05",
    tags: ["Next.js", "LINE LIFF", "Firebase", "Tailwind"],
    thumbnail: "/images/marchelink-thumb.png",
    url: "https://marche-link.jp/admin-entry/",
  },
];
