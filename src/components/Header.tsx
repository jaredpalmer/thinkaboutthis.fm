import * as React from 'react';
import { rhythm, scale } from '../lib/typography';
import { theme } from '../lib/theme';
import { css } from 'glamor';
export function Header(props: any) {
  return (
    <div {...props}>
      <h1
        {...css({
          ...scale(1),
          lineHeight: '1.1',
          color: theme.color.white,
          [theme.media.medium]: { marginTop: rhythm(2) },
        })}
      >
        Think About This
      </h1>
      <p
        {...css({
          marginBottom: rhythm(1),
          ...scale(0.3),
          color: theme.color.grayLightestest,
          opacity: 0.9,
        })}
      >
        The podcast that challenges you to think differently about business,
        money, culture, technology, media, marketing and more. Hosted by{' '}
        <a
          {...css({ textDecoration: 'none', fontWeight: 700 })}
          href="http://twitter.com/shellypalmer"
        >
          Shelly Palmer
        </a>{' '}
        and{' '}
        <a
          {...css({ textDecoration: 'none', fontWeight: 700 })}
          href="http://twitter.com/rossmartin1"
        >
          Ross Martin
        </a>
        .
      </p>
    </div>
  );
}
