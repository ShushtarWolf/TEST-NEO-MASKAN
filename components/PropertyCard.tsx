import Image from 'next/image';
import Link from 'next/link';
<<<<<<< HEAD
import { Listing } from '@/data/listings';
import { Button } from '@/ui/Button';
import { ArrowRight, Bath, BedDouble, Ruler } from 'lucide-react';
=======
import { Listing } from '@/types/listing';
import { Button } from '@/ui/Button';
import { ArrowLeft, Bath, BedDouble, Ruler } from 'lucide-react';
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
import { cn } from '@/utils/cn';

interface PropertyCardProps {
  listing: Listing;
  highlight?: boolean;
}

export function PropertyCard({ listing, highlight = false }: PropertyCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-neo',
        highlight && 'border-primary-200'
      )}
    >
      <div className="relative h-64 w-full">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {listing.featured ? (
<<<<<<< HEAD
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">{listing.location}</p>
=======
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-primary-600">
            ویژه
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-6 text-right">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-500">{listing.location}</p>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          <h3 className="text-lg font-semibold text-dark">{listing.title}</h3>
          <p className="text-sm text-muted">{listing.description}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
<<<<<<< HEAD
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center space-x-1">
              <BedDouble className="h-4 w-4 text-primary-500" />
              <span>{listing.bedrooms} bd</span>
            </span>
            <span className="inline-flex items-center space-x-1">
              <Bath className="h-4 w-4 text-primary-500" />
              <span>{listing.bathrooms} ba</span>
            </span>
            <span className="inline-flex items-center space-x-1">
              <Ruler className="h-4 w-4 text-primary-500" />
              <span>{listing.area} m²</span>
            </span>
          </div>
          <span className="text-base font-semibold text-primary-600">
            AED {(listing.price / 1000).toLocaleString()}K
=======
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-4 w-4 text-primary-500" />
              <span>{listing.bedrooms} خواب</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Bath className="h-4 w-4 text-primary-500" />
              <span>{listing.bathrooms} حمام</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Ruler className="h-4 w-4 text-primary-500" />
              <span>{listing.area} متر</span>
            </span>
          </div>
          <span className="text-base font-semibold text-primary-600">
            {Number(listing.price).toLocaleString('fa-IR')} درهم
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {listing.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary-50 px-3 py-1 font-medium text-primary-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-xs text-muted">
<<<<<<< HEAD
            Energy {listing.energyScore} · Walk {listing.walkScore}
          </div>
          <Button asChild variant="secondary">
            <Link href={`/listings/${listing.id}`} className="inline-flex items-center space-x-2">
              <span>View details</span>
              <ArrowRight className="h-4 w-4" />
=======
            انرژی {listing.energyScore} · پیاده‌روی {listing.walkScore}
          </div>
          <Button asChild variant="secondary" className="gap-2">
            <Link href={`/listings/${listing.id}`} className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>جزئیات بیشتر</span>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
