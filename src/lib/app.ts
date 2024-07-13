import type { MetaTagsProps } from 'svelte-meta-tags';
import { appDescription, appTitle, openGraphImage } from '@/config/app';
import type { SpecializationEntity } from '@/types/specializations';

/**
 * Create base application meta data
 *
 * @param url URL of the current page
 */
export const createBasePageMeta = (url: URL) =>
  Object.freeze<MetaTagsProps>({
    titleTemplate: '%s | Riders Republic DB',
    description: appDescription,
    canonical: new URL(url.pathname, url.origin).href,
    twitter: {
      cardType: 'summary_large_image',
      description: appDescription,
      image: openGraphImage,
      title: appTitle,
    },
    openGraph: {
      images: [
        {
          alt: appTitle,
          height: 540,
          type: 'image/jpeg',
          url: openGraphImage,
          width: 960,
        },
      ],
      title: appTitle,
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
    },
  });

/**
 * Generate specialization page meta tags
 *
 * @param specialization Source specialization
 */
export const createSpecializationPageMeta = (
  specialization: SpecializationEntity<any, any>,
): MetaTagsProps =>
  Object.freeze({
    title: specialization.title,
    openGraph: {
      title: `${specialization.title} | ${appTitle}`,
    },
  });
