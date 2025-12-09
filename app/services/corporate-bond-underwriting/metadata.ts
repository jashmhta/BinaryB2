import { Metadata } from 'next';
import { serviceMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: serviceMetadata['corporate-bond-underwriting'].title,
  description: serviceMetadata['corporate-bond-underwriting'].description,
  keywords: serviceMetadata['corporate-bond-underwriting'].keywords,
  openGraph: {
    title: serviceMetadata['corporate-bond-underwriting'].title,
    description: serviceMetadata['corporate-bond-underwriting'].description,
    url: '/services/corporate-bond-underwriting',
  },
};
