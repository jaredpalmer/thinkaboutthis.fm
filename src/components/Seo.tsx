import * as React from 'react';
import Helmet from 'react-helmet';
import ogImage from '../images/album.png';
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
            { property: 'og:type', content: 'website' },
            title && {
              name: 'twitter:title',
              content: title,
            },
            title && { property: 'og:title', content: title },
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
              property: 'og:description',
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
              content: image || `https://thinkaboutthis.fm${ogImage}`,
            },
            {
              property: 'og:image',
              content: image || `https://thinkaboutthis.fm${ogImage}`,
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
