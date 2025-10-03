<<<<<<< HEAD
import type { Listing } from '@/data/listings';
=======
import type { Listing } from '@/types/listing';
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid

export type RecommendationInput = {
  budget?: number;
  bedrooms?: number;
  focusTags?: string[];
};

type Recommendation = Listing & { score: number };

const TAG_WEIGHTS: Record<string, number> = {
<<<<<<< HEAD
  luxury: 1.4,
  family: 1.2,
  waterfront: 1.5,
  investment: 1.1,
  garden: 1.1,
  city: 1.0,
  culture: 1.0,
  duplex: 1.05
=======
  لوکس: 1.4,
  خانوادگی: 1.2,
  ساحلی: 1.5,
  'سرمایه‌گذاری': 1.1,
  باغ: 1.1,
  شهری: 1.0,
  فرهنگی: 1.0,
  دوبلکس: 1.05
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
};

export function getRecommendations(listings: Listing[], input: RecommendationInput): Recommendation[] {
  const { budget, bedrooms, focusTags = [] } = input;

  return listings
    .map((listing) => {
      let score = 1;

      if (budget) {
        const relativePrice = budget / listing.price;
        const priceScore = relativePrice >= 1 ? 1.1 : relativePrice;
        score *= priceScore;
      }

      if (bedrooms) {
        score *= 1 + Math.min(listing.bedrooms, bedrooms) / Math.max(bedrooms, 1);
      }

      if (focusTags.length > 0) {
        const overlap = listing.tags.filter((tag) => focusTags.includes(tag));
        const tagBoost = overlap.reduce((acc, tag) => acc + (TAG_WEIGHTS[tag] ?? 1), 0);
        score *= overlap.length > 0 ? tagBoost / overlap.length : 0.8;
      }

      score *= listing.energyScore / 100;
      score *= 0.6 + listing.walkScore / 200;

      return { ...listing, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
