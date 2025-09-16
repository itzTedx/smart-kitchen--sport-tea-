"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  generateGradientPlaceholder,
  generateSmartKitchenPlaceholder,
  generateTexturedPlaceholder,
  getQualityFromPreset,
  type ImageQuality,
} from "@/lib/image-utils";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number | ImageQuality;
  className?: string;
  placeholder?: "blur" | "empty" | "smartkitchen" | "gradient" | "textured";
  blurDataURL?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Default blur data URL for Next.js compatibility
const DEFAULT_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

// Base64 blur placeholder for better loading experience
const generateBlurPlaceholder = (width: number, height: number): string => {
  // Only generate on client side
  if (typeof window === "undefined") {
    return DEFAULT_BLUR_DATA_URL;
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Create a subtle gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#f3f4f6");
    gradient.addColorStop(1, "#e5e7eb");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add some noise for texture
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(209, 213, 219, ${Math.random() * 0.3})`;
      ctx.fillRect(Math.random() * width, Math.random() * height, Math.random() * 10 + 5, Math.random() * 10 + 5);
    }
  }

  return canvas.toDataURL("image/jpeg", 0.1);
};

export const OptimizedImage = ({
  src,
  alt,
  width = 400,
  height = 300,
  fill = false,
  priority = false,
  quality = 85,
  className,
  placeholder = "blur",
  blurDataURL,
  sizes,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [blurData, setBlurData] = useState<string | undefined>(blurDataURL);
  const imgRef = useRef<HTMLImageElement>(null);

  // Convert quality preset to number if needed
  const imageQuality = typeof quality === "string" ? getQualityFromPreset(quality) : quality;

  // Generate placeholder based on type
  useEffect(() => {
    if (!blurData && !fill) {
      let generatedPlaceholder: string | undefined;

      switch (placeholder) {
        case "smartkitchen":
          generatedPlaceholder = generateSmartKitchenPlaceholder(width, height);
          break;
        case "gradient":
          generatedPlaceholder = generateGradientPlaceholder(width, height);
          break;
        case "textured":
          generatedPlaceholder = generateTexturedPlaceholder(width, height);
          break;
        case "blur":
        default:
          generatedPlaceholder = generateBlurPlaceholder(width, height);
          break;
      }

      if (generatedPlaceholder) {
        setBlurData(generatedPlaceholder);
      }
    }
  }, [blurData, placeholder, width, height, fill]);

  // For Next.js compatibility, we need to handle blur placeholder differently
  const shouldUseBlur =
    placeholder === "blur" ||
    placeholder === "smartkitchen" ||
    placeholder === "gradient" ||
    placeholder === "textured";

  const nextJsPlaceholder = shouldUseBlur ? "blur" : placeholder;

  // Provide default blurDataURL for Next.js compatibility
  const finalBlurDataURL = blurData || (shouldUseBlur ? DEFAULT_BLUR_DATA_URL : undefined);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-500",
          fill ? "absolute inset-0" : "",
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <div className="text-center">
          <svg
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <p className="mt-2 text-sm">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(fill ? "absolute inset-0" : "relative overflow-hidden")}
      style={!fill ? { width, height } : undefined}
    >
      {/* Loading skeleton */}
      {isLoading && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-300" />}

      {/* Optimized Image */}
      <Image
        alt={alt}
        blurDataURL={finalBlurDataURL}
        className={cn("transition-opacity duration-300", className, isLoading ? "opacity-0" : "opacity-100")}
        fill={fill}
        height={fill ? undefined : height}
        onError={handleError}
        onLoad={handleLoad}
        placeholder={nextJsPlaceholder}
        priority={priority}
        quality={imageQuality}
        ref={imgRef}
        sizes={sizes}
        src={src}
        width={fill ? undefined : width}
      />

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0.1s" }} />
            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0.2s" }} />
          </div>
        </div>
      )}
    </div>
  );
};

// Hook for lazy loading images
export const useLazyImage = (src: string, threshold = 0.1) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, threshold]);

  return { imageSrc, imgRef };
};

// Lazy loading image component
export const LazyOptimizedImage = ({
  src,
  alt,
  width = 400,
  height = 300,
  fill = false,
  priority = false,
  quality = 85,
  className,
  placeholder = "blur",
  blurDataURL,
  sizes,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const { imageSrc, imgRef } = useLazyImage(src);

  if (!imageSrc) {
    return (
      <div
        className={cn("animate-pulse bg-gray-200", fill ? "absolute inset-0" : "", className)}
        ref={imgRef}
        style={!fill ? { width, height } : undefined}
      />
    );
  }

  return (
    <OptimizedImage
      alt={alt}
      blurDataURL={blurDataURL}
      className={className}
      fill={fill}
      height={height}
      onError={onError}
      onLoad={onLoad}
      placeholder={placeholder}
      priority={priority}
      quality={quality}
      sizes={sizes}
      src={imageSrc}
      width={width}
    />
  );
};
