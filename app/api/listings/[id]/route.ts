import { NextResponse } from 'next/server';
import { getListingById } from '@/lib/data';

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(_request: Request, context: RouteContext) {
  const listing = await getListingById(context.params.id);
  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }
  return NextResponse.json({ data: listing });
}
