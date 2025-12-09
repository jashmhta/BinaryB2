'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  priority = false,
  className,
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Convert image path to WebP if available
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http')) return originalSrc;
    const ext = originalSrc.split('.').pop();
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/, '.webp');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);

  return (
    <Image
      src={webpSrc}
      alt={alt}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      quality={85}
      className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  );
}
