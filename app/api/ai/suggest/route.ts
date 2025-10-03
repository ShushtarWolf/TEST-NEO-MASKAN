import { NextRequest, NextResponse } from 'next/server';
import { getListings } from '@/lib/data';
import type { Listing } from '@/types/listing';

type SuggestionResponse = {
  results: Listing[];
  insight: string;
};

function buildInsight(query: string, matches: Listing[]): string {
  if (!query.trim()) {
    return 'لطفا تمرکز جست‌وجو را مشخص کنید تا نئو پیشنهادهای دقیق‌تری ارائه دهد.';
  }

  if (matches.length === 0) {
    return 'موردی مطابق با پرسش پیدا نشد. محدوده بودجه یا برچسب‌ها را تغییر دهید.';
  }

  const best = matches[0];
  return `بر اساس عبارت «${query}» بهترین تطبیق ${best.title} در ${best.location} است و ${matches.length} گزینه‌ی مشابه یافت شد.`;
}

function scoreListing(listing: Listing, query: string) {
  const normalized = query.toLowerCase();
  const terms = normalized.split(/\s+/).filter(Boolean);
  let score = 0;

  for (const term of terms) {
    if (listing.title.toLowerCase().includes(term)) score += 4;
    if (listing.location.toLowerCase().includes(term)) score += 3;
    if (listing.description.toLowerCase().includes(term)) score += 1;
    if (listing.tags.some((tag) => tag.toLowerCase().includes(term))) score += 5;
  }

  const bedroomMatch = normalized.match(/(\d+)\s*(خوابه|bed)/);
  if (bedroomMatch) {
    const desired = Number.parseInt(bedroomMatch[1], 10);
    if (listing.bedrooms >= desired) {
      score += 6;
    } else {
      score -= 4;
    }
  }

  const budgetMatch = normalized.match(/(\d+[\d,]*)\s*(?:aed|درهم)/);
  if (budgetMatch) {
    const budget = Number.parseInt(budgetMatch[1].replace(/,/g, ''), 10);
    if (listing.price <= budget) {
      score += 6;
    } else {
      score -= 3;
    }
  }

  if (listing.featured) {
    score += 2;
  }

  return score;
}

async function buildResponse(query: string): Promise<SuggestionResponse> {
  const listings = await getListings();
  if (!query) {
    return {
      results: listings.slice(0, 3),
      insight: 'پیشنهادهای آغازین نئومسکن برای شروع کاوش.'
    };
  }

  const ranked = listings
    .map((listing) => ({ listing, score: scoreListing(listing, query) }))
    .filter(({ score }) => score > -5)
    .sort((a, b) => b.score - a.score)
    .map(({ listing }) => listing);

  return {
    results: ranked.slice(0, 5),
    insight: buildInsight(query, ranked)
  };
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') ?? '';
  const response = await buildResponse(query);
  return NextResponse.json({ data: response });
}

export async function POST(request: Request) {
  const { query = '' } = (await request.json()) as { query?: string };
  const response = await buildResponse(query);
  return NextResponse.json({ data: response });
}
