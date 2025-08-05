// Image optimization utilities

export interface ImagePlaceholder {
  dataURL: string;
  width: number;
  height: number;
}

// Generate a simple gradient placeholder
export const generateGradientPlaceholder = (
  width: number,
  height: number,
  colors: [string, string] = ["#f3f4f6", "#e5e7eb"]
): string => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  return canvas.toDataURL("image/jpeg", 0.1);
};

// Generate a textured placeholder with noise
export const generateTexturedPlaceholder = (width: number, height: number, baseColor = "#f3f4f6"): string => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Base background
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, width, height);

    // Add subtle noise pattern
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.1 + 0.05;

      ctx.fillStyle = `rgba(209, 213, 219, ${opacity})`;
      ctx.fillRect(x, y, size, size);
    }
  }

  return canvas.toDataURL("image/jpeg", 0.1);
};

// Generate a branded placeholder for SportTea
export const generateSportTeaPlaceholder = (width: number, height: number): string => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Tea-themed gradient (green to brown)
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#f0f9ff"); // Light blue
    gradient.addColorStop(0.5, "#e0f2fe"); // Lighter blue
    gradient.addColorStop(1, "#bae6fd"); // Sky blue
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add tea leaf pattern
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 15 + 5;
      const opacity = Math.random() * 0.2 + 0.1;

      ctx.fillStyle = `rgba(34, 197, 94, ${opacity})`; // Green color
      ctx.beginPath();
      ctx.ellipse(x, y, size, size * 0.6, Math.random() * Math.PI, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  return canvas.toDataURL("image/jpeg", 0.1);
};

// Calculate optimal image dimensions
export const calculateImageDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  maxHeight: number
): { width: number; height: number } => {
  const aspectRatio = originalWidth / originalHeight;

  if (maxWidth / aspectRatio <= maxHeight) {
    return {
      width: maxWidth,
      height: Math.round(maxWidth / aspectRatio),
    };
  }
  return {
    width: Math.round(maxHeight * aspectRatio),
    height: maxHeight,
  };
};

// Generate responsive sizes for different screen sizes
export const generateResponsiveSizes = (
  baseWidth: number,
  baseHeight: number
): { [key: string]: { width: number; height: number } } => {
  const sizes = {
    sm: { width: 640, height: 480 },
    md: { width: 768, height: 576 },
    lg: { width: 1024, height: 768 },
    xl: { width: 1280, height: 960 },
    "2xl": { width: 1536, height: 1152 },
  };

  const responsiveSizes: { [key: string]: { width: number; height: number } } = {};

  Object.entries(sizes).forEach(([breakpoint, maxSize]) => {
    responsiveSizes[breakpoint] = calculateImageDimensions(baseWidth, baseHeight, maxSize.width, maxSize.height);
  });

  return responsiveSizes;
};

// Generate sizes attribute for responsive images
export const generateSizesAttribute = (defaultSize = "100vw"): string => {
  return `(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, ${defaultSize}`;
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    img.src = src;
  });
};

// Batch preload images
export const preloadImages = async (srcs: string[]): Promise<void> => {
  const promises = srcs.map((src) => preloadImage(src));
  await Promise.all(promises);
};

// Check if image is in viewport
export const isImageInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Image quality presets
export const IMAGE_QUALITY_PRESETS = {
  low: 60,
  medium: 75,
  high: 85,
  ultra: 95,
} as const;

export type ImageQuality = keyof typeof IMAGE_QUALITY_PRESETS;

// Get quality value from preset
export const getQualityFromPreset = (preset: ImageQuality): number => {
  return IMAGE_QUALITY_PRESETS[preset];
};
