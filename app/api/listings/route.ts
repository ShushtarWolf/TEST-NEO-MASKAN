import { NextRequest, NextResponse } from 'next/server';
import { getListings } from '@/lib/data';

export async function GET(request: NextRequest) {
  const listings = await getListings();
  const { searchParams } = new URL(request.url);

  const keyword = searchParams.get('q');
  const tagParams = searchParams.getAll('tag');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const bedrooms = searchParams.get('bedrooms');

  const normalizedKeyword = keyword?.toLowerCase() ?? '';

  const filtered = listings.filter((listing) => {
    const matchesKeyword = normalizedKeyword
      ? listing.title.toLowerCase().includes(normalizedKeyword) ||
        listing.location.toLowerCase().includes(normalizedKeyword) ||
        listing.description.toLowerCase().includes(normalizedKeyword)
      : true;
    const matchesTag = tagParams.length
      ? tagParams.every((tag) => listing.tags.includes(tag))
      : true;
    const matchesMin = minPrice ? listing.price >= Number(minPrice) : true;
    const matchesMax = maxPrice ? listing.price <= Number(maxPrice) : true;
    const matchesBedrooms = bedrooms ? listing.bedrooms >= Number(bedrooms) : true;
    return matchesKeyword && matchesTag && matchesMin && matchesMax && matchesBedrooms;
  });

  return NextResponse.json({ data: filtered });
}
