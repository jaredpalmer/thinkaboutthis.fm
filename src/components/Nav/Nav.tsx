import * as React from 'react';
import { css } from 'glamor';
import { Link } from 'gatsby';
import { rhythm } from '../../lib/typography';
import { theme } from '../../lib/theme';

const stripeStyles = {
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  height: 4,
  background: '#00FFF4',
};

export function Nav({ showStripe = true }: { showStripe?: boolean }) {
  return (
    <div
      style={{
        height: 80,
        width: '100%',
      }}
    >
      {showStripe ? <div {...css(stripeStyles)} /> : null}
      <div
        {...css({
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Link
          to="/"
          {...css({
            fontFamily: `'GT America Extended', -apple-system, BlinkMacSystemFont,
                  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif`,
            fontSize: rhythm(0.8),
            textDecoration: 'none',
            color: theme.color.white,
            transition: 'color 100ms ease-out',
            textTransform: 'lowercase',
            ':hover': {
              textDecoration: 'none',
              color: theme.color.purple,
            },
          })}
        >
          Think <span style={{ color: '#99FFF2' }}>About</span>{' '}
          <span style={{ color: '#00FFDE' }}>This</span>
          {/* <span
            {...css({
              display: 'inline-block',
              marginLeft: '-.25rem',
              marginRight: '.25rem',
            })}
          >
            .
          </span>
          <span {...css({ fontSize: rhythm(1) })}>fm</span> */}
        </Link>
        {/* <div
          {...css({
            display: 'none',
            [theme.media.medium]: { display: 'flex' },
          })}
        >
          {PODCAST_LINKS.map(i => (
            <img
              key={i.href}
              src={i.src}
              alt={i.text}
              {...css({
                borderRadius: 12,
                height: 36,
                display: 'block',
                width: 36,

                marginRight: '.5rem',
                boxShadow: `1px 1px 1px #000 inset`,
                background: '#fff',
                marginBottom: 0,
                verticalAlign: 'middle',
              })}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
