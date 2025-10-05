'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState, useRef } from 'react';
import { Listing } from '@/types/listing';
import { Button } from '@/ui/Button';
import { ArrowLeft, Bath, BedDouble, ImageOff, Ruler, Heart, Share2, Eye } from 'lucide-react';
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
  const [isFavorited, setIsFavorited] = useState(false);
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

  // Fallback: make visible after a short delay if intersection observer doesn't trigger
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'card-interactive group',
        highlight && 'ring-2 ring-primary-200',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      )}
      style={{
        transitionDelay: isVisible ? '0ms' : '100ms',
        animation: isVisible ? 'slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
        ...style
      }}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorited(!isFavorited);
            }}
            className={cn(
              "p-2 rounded-xl backdrop-blur-sm transition-all duration-200",
              isFavorited 
                ? "bg-red-500 text-white shadow-sm" 
                : "bg-white/90 text-gray-600 hover:bg-white hover:text-red-500"
            )}
            aria-label={isFavorited ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
          >
            <Heart className={cn("h-4 w-4", isFavorited && "fill-current")} />
          </button>
        </div>
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
        {listing.featured && (
          <span className="absolute left-4 top-4 px-3 py-1 bg-primary-600 text-white text-xs font-body font-medium rounded-lg shadow-sm">
            ویژه
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-body-sm text-gray-500 font-body">{listing.location}</p>
            {listing.featured && (
              <span className="status-active">ویژه</span>
            )}
          </div>
          <h3 className="text-body-lg text-gray-900 font-body font-semibold line-clamp-1">{listing.title}</h3>
          <p className="text-body-sm text-gray-600 font-body line-clamp-2">{listing.description}</p>
        </div>
        <div className="mt-4 space-y-4">
          {/* Property Details */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <BedDouble className="h-4 w-4 text-gray-400" />
              <span className="text-body-sm text-gray-600 font-body">{listing.bedrooms}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 text-gray-400" />
              <span className="text-body-sm text-gray-600 font-body">{listing.bathrooms}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="h-4 w-4 text-gray-400" />
              <span className="text-body-sm text-gray-600 font-body">{listing.area} متر</span>
            </div>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <span className="text-display-sm text-gray-900 font-display">
              {Number(listing.price).toLocaleString('fa-IR')} درهم
            </span>
            <Button asChild className="btn-modern-primary">
              <Link href={`/listings/${listing.id}`}>
                <ArrowLeft className="h-4 w-4 ml-2" />
                مشاهده
              </Link>
            </Button>
          </div>
        </div>
        {/* Tags */}
        {listing.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {listing.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-body-sm font-body">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Energy & Walk Score */}
        <div className="flex items-center gap-4 text-body-sm text-gray-500 font-body">
          <span>انرژی {listing.energyScore}</span>
          <span>•</span>
          <span>پیاده‌روی {listing.walkScore}</span>
        </div>
      </div>
    </article>
  );
}
