'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState, useRef } from 'react';
import { Listing } from '@/types/listing';
import { Button } from '@/ui/Button';
import { ArrowLeft, Bath, BedDouble, ImageOff, Ruler } from 'lucide-react';
import { cn } from '@/utils/cn';

interface PropertyCardProps {
  listing: Listing;
  highlight?: boolean;
  style?: React.CSSProperties;
}

export function PropertyCard({ listing, highlight = false, style }: PropertyCardProps) {
  const [imageStatus, setImageStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const shouldShowImage = useMemo(() => {
    return Boolean(listing.image) && imageStatus !== 'error';
  }, [listing.image, imageStatus]);

  useEffect(() => {
    setImageStatus('loading');
  }, [listing.image]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition-all duration-500 ease-out',
        'hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10',
        'transform-gpu',
        highlight && 'border-primary-200',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        isHovered && 'scale-[1.02] shadow-2xl shadow-primary-500/20'
      )}
      style={{
        transitionDelay: isVisible ? '0ms' : '100ms',
        animation: isVisible ? 'slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
        ...style
      }}
    >
      <div className="relative h-64 w-full overflow-hidden group">
        {shouldShowImage ? (
          <>
            <Image
              src={listing.image}
              alt={listing.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={cn(
                'object-cover transition-all duration-700 ease-out group-hover:scale-110',
                imageStatus === 'ready' ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={() => setImageStatus('ready')}
              onError={() => setImageStatus('error')}
              priority={highlight}
            />
            {imageStatus !== 'ready' ? (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-primary-50">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"></div>
              </div>
            ) : null}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-primary-50 text-slate-600">
            <ImageOff className="h-8 w-8" aria-hidden="true" />
            <span className="mt-2 text-xs font-lalezar font-semibold">پیش‌نمایش در دسترس نیست</span>
          </div>
        )}
        {listing.featured ? (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-lalezar font-semibold text-primary-600 backdrop-blur-sm shadow-lg animate-pulse">
            ویژه
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-6 text-right" dir="rtl">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-500">{listing.location}</p>
          <h3 className="text-lg font-lalezar font-semibold text-dark">{listing.title}</h3>
          <p className="text-sm font-lalezar text-muted leading-relaxed text-justify">{listing.description}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center justify-center gap-4">
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
          <div className="text-xs font-lalezar text-muted text-center">انرژی {listing.energyScore} · پیاده‌روی {listing.walkScore}</div>
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
