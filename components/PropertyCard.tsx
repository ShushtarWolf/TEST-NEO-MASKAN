'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Listing } from '@/types/listing';
import { Button } from '@/ui/Button';
import { ArrowLeft, Bath, BedDouble, ImageOff, Ruler } from 'lucide-react';
import { cn } from '@/utils/cn';

interface PropertyCardProps {
  listing: Listing;
  highlight?: boolean;
}

export function PropertyCard({ listing, highlight = false }: PropertyCardProps) {
  const [imageStatus, setImageStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  const shouldShowImage = useMemo(() => {
    return Boolean(listing.image) && imageStatus !== 'error';
  }, [listing.image, imageStatus]);

  useEffect(() => {
    setImageStatus('loading');
  }, [listing.image]);

  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-neo',
        highlight && 'border-primary-200'
      )}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {shouldShowImage ? (
          <>
            <Image
              src={listing.image}
              alt={listing.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={cn(
                'object-cover transition-opacity duration-500',
                imageStatus === 'ready' ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={() => setImageStatus('ready')}
              onError={() => setImageStatus('error')}
              priority={highlight}
            />
            {imageStatus !== 'ready' ? (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-200 via-slate-100 to-primary-50" />
            ) : null}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-primary-50 text-slate-600">
            <ImageOff className="h-8 w-8" aria-hidden="true" />
            <span className="mt-2 text-xs font-lalezar font-semibold">پیش‌نمایش در دسترس نیست</span>
          </div>
        )}
        {listing.featured ? (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-lalezar font-semibold text-primary-600">
            ویژه
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-6 text-right">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-500">{listing.location}</p>
          <h3 className="text-lg font-lalezar font-semibold text-dark">{listing.title}</h3>
          <p className="text-sm font-lalezar text-muted">{listing.description}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-4 w-4 text-primary-500" />
              <span className="font-lalezar">{listing.bedrooms} خواب</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Bath className="h-4 w-4 text-primary-500" />
              <span className="font-lalezar">{listing.bathrooms} حمام</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Ruler className="h-4 w-4 text-primary-500" />
              <span className="font-lalezar">{listing.area} متر</span>
            </span>
          </div>
          <span className="text-base font-lalezar font-semibold text-primary-600">
            {Number(listing.price).toLocaleString('fa-IR')} درهم
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {listing.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary-50 px-3 py-1 font-lalezar font-medium text-primary-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-xs font-lalezar text-muted">انرژی {listing.energyScore} · پیاده‌روی {listing.walkScore}</div>
          <Button asChild variant="secondary" className="gap-2">
            <Link href={`/listings/${listing.id}`} className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-lalezar">جزئیات بیشتر</span>
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
