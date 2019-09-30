import * as React from 'react';
import Helmet from 'react-helmet';

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  children?: any;
  slug?: string;
}
// @see https://github.com/nfl/react-helmet/issues/373
// Use arrays. lol.
export const Seo: React.SFC<SeoProps> = ({
  title,
  image,
  description,
  children,
  slug,
  ...rest
}) => {
  return (
    <>
      <div className="skipnav">
        <a href="#maincontent">Skip to main content</a>{' '}
        <a href="#footer">Skip to footer</a>
      </div>

      <Helmet
        meta={
          [
            { name: 'copyright', content: 'The Palmer Group' },
            { name: 'og:type', content: 'website' },
            title && {
              name: 'twitter:title',
              content: title,
            },
            title && { name: 'og:title', content: title },
            // { name: 'twitter:site', content: '@theundefinedio' },
            description && {
              name: 'description',
              content: description,
            },
            description && {
              name: 'twitter:description',
              content: description,
            },
            description && {
              name: 'og:description',
              content: description,
            },
            {
              property: 'og:url',
              content: `https://thinkaboutthis.fm${slug}`,
            },
            {
              property: 'og:site_name',
              content: `Think About This Podcast`,
            },
            {
              property: 'og:locale',
              content: `en_US`,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:image',
              content:
                image ||
                'https://megaphone-prod.s3.amazonaws.com/podcasts/77e3c5ca-de22-11e9-a22c-2708e4e5850b/image/uploads_2F1569258166099-2vrbzsr3p0e-24cfde05d65a44277165d2f9629dbdb2_2FThink%2BAbout%2BThis%2BPlaceholder%2BArtworkSIZEXV2.png',
            },
            {
              name: 'og:image',
              content:
                image ||
                'https://megaphone-prod.s3.amazonaws.com/podcasts/77e3c5ca-de22-11e9-a22c-2708e4e5850b/image/uploads_2F1569258166099-2vrbzsr3p0e-24cfde05d65a44277165d2f9629dbdb2_2FThink%2BAbout%2BThis%2BPlaceholder%2BArtworkSIZEXV2.png',
            },
            {
              name: 'apple-itunes-app',
              content: 'app-id=1481099167',
            },
          ].filter(Boolean) as any[]
        }
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Think About This Podcast RSS"
          href="https://feeds.megaphone.fm/think-about-this-with-shelly-palmer-ross-martin"
        />
        {children}
      </Helmet>
    </>
  );
};

Seo.displayName = 'Head';
