import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Footer } from '@components/Footer';
import { rhythm } from '../lib/typography';
import { theme } from '../lib/theme';
import { css } from 'glamor';
import { format } from 'date-fns';
import { Listen } from '@components/Listen/Listen';
import { ShareRow } from '@components/Share/ShareRow';
import { Header } from '../components/Header';
import { Bio } from '@components/Bio';
import { Seo } from '@components/Seo';
import GatsbyImage from 'gatsby-image';
import { VisuallyHidden } from '@components/VisuallyHidden';

export default class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Seo
          title="Think About This Podcast"
          description="A Podcast that Challenges You to Think Differently About Business, Money, Culture, Technology, Media and Marketing. Hosted by Shelly Palmer and Ross Martin."
          slug="/"
        />
        <GatsbyImage
          className={css({
            display: 'block',
            [theme.media.medium]: { display: 'none' },
          })}
          sizes={this.props.data.heroMobile.childImageSharp.sizes}
        />
        <GatsbyImage
          className={css({
            display: 'none',
            [theme.media.medium]: { display: 'block' },
          })}
          sizes={this.props.data.hero.childImageSharp.sizes}
        />
        <div
          {...css({
            maxWidth: 675,
            [theme.media.medium]: { maxWidth: 1100 },
            margin: '0 auto',
            padding: '0 1rem',
          })}
        >
          <div
            {...css({
              [theme.media.medium]: { display: 'flex' },
              margin: '0 auto',
            })}
          >
            <div
              {...css({
                margin: '-6rem auto 0',
                [theme.media.medium]: { margin: '-10rem auto 0' },
                flex: 0,
              })}
            >
              <Link
                to="/"
                {...css({
                  display: 'block',
                  textDecoration: 'none',
                  textAlign: 'center',
                  background: '#000',
                  margin: '2rem auto',
                  width: 150,
                  height: 150,
                  [theme.media.small]: { width: 175, height: 175 },
                  [theme.media.medium]: { width: 300, height: 300 },

                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: `0 4px 8px rgba(0,0,0,.1), 0 16px 32px rgba(0,0,0,.1)`,
                })}
              >
                <GatsbyImage
                  style={{ borderRadius: 16 }}
                  sizes={this.props.data.album.childImageSharp.sizes}
                />
              </Link>
              <Header {...css({ [theme.media.medium]: { display: 'none' } })} />
              <div {...css({ marginBottom: rhythm(1) })}>
                <Listen />
              </div>
              <div>
                <div
                  {...css({
                    color: theme.color.gray,
                    fontSize: '.9rem',
                    marginBottom: rhythm(0.5),
                    textTransform: 'uppercase',
                    letterSpacing: '.1em',
                  })}
                >
                  Hosted By
                </div>
                <Bio
                  name="Shelly Palmer"
                  twitterHandle="shellypalmer"
                  avatarUrl="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/56355255_10157326835544595_9205623440986341376_n.jpg?_nc_cat=101&_nc_oc=AQnjVjLzZP1C8e4I_Tp9p1Ql4JW8I7FORRzVh5twk3hsPiE0Oq13Q7K5_SQvRvf8zqA&_nc_ht=scontent-lga3-1.xx&oh=7e4ee00ae1e83bcacb643e110c4b7258&oe=5E2D1619"
                />
                <Bio
                  name="Ross Martin"
                  twitterHandle="rossmartin1"
                  avatarUrl="https://pbs.twimg.com/profile_images/888457366693445633/JpEVne8x_400x400.jpg"
                />
              </div>
            </div>
            <div {...css({ [theme.media.medium]: { marginLeft: rhythm(2) } })}>
              <Header
                {...css({
                  display: 'none',
                  [theme.media.medium]: { display: 'block' },
                })}
              />
              <ShareRow
                author="thinkaboutthis"
                {...css({ marginBottom: rhythm(2) })}
              />
              <div {...css({ marginTop: rhythm(2) })}>
                {this.props.data.allEpisode.edges.map(
                  ({ node }: any, i: number) => (
                    <div key={`${node.date}${i}-rss`}>
                      <>
                        <div
                          {...css({ display: 'flex', alignItems: 'center' })}
                        >
                          <Link
                            to={node.fields.slug}
                            style={{
                              textDecoration: 'none',
                            }}
                            {...css({
                              '& svg': {
                                color: 'white',
                              },
                              '&:hover svg': {
                                color: theme.color.purple,
                              },
                              transition: 'scale 100ms ease-out',
                              '&:active': {
                                transform: 'scale(.98)',
                              },
                            })}
                          >
                            <svg
                              height="48"
                              width="48"
                              version="1.1"
                              viewBox="0 0 48 48"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlSpace="preserve"
                              aria-hidden="true"
                              {...css({
                                verticalAlign: 'middle',
                                height: 42,
                                width: 42,
                                marginRight: rhythm(0.5),
                              })}
                            >
                              <title>button circle play</title>
                              <g fill="currentColor">
                                <path
                                  // tslint:disable-next-line:max-line-length
                                  d="M24,1C11.317,1,1,11.317,1,24s10.317,23,23,23s23-10.317,23-23S36.683,1,24,1z M32.524,24.852l-13,8 C19.363,32.95,19.182,33,19,33c-0.168,0-0.336-0.042-0.488-0.127C18.196,32.696,18,32.362,18,32V16c0-0.362,0.196-0.696,0.512-0.873 c0.317-0.178,0.703-0.169,1.013,0.021l13,8C32.82,23.33,33,23.652,33,24S32.82,24.67,32.524,24.852z"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <VisuallyHidden>View {node.title}</VisuallyHidden>
                          </Link>
                          <div {...css({ flex: 1 })}>
                            <span
                              {...css({
                                display: 'block',
                                color: theme.color.grayLighter,
                                fontSize: rhythm(0.5),
                                textTransform: 'uppercase',
                                letterSpacing: '.1em',
                              })}
                            >
                              {format(node.date, 'MMMM D, YYYY')}
                            </span>
                            <Link
                              to={node.fields.slug}
                              aria-label={`View ${node.title}`}
                              style={{ textDecoration: 'none' }}
                            >
                              <h2
                                {...css({
                                  color: '#fff',
                                  marginTop: 0,
                                  fontSize: rhythm(0.85),
                                  ':hover': {
                                    color: '#00FFF4',
                                    cursor: 'pointer',
                                  },
                                })}
                              >
                                {node.title}
                              </h2>
                            </Link>
                          </div>
                        </div>

                        <p
                          {...css({
                            fontSize: rhythm(0.6),
                            color: theme.color.grayLightest,
                          })}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: node.description,
                            }}
                          />{' '}
                          <Link
                            to={node.fields.slug}
                            aria-label={`View ${node.title}`}
                          >
                            Listen to Episode →
                          </Link>
                        </p>
                      </>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export const query = graphql`
  {
    album: file(relativePath: { eq: "album.png" }) {
      childImageSharp {
        sizes(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    hero: file(relativePath: { eq: "hero3.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1700, maxHeight: 550) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    heroMobile: file(relativePath: { eq: "heroMobile.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1000, maxHeight: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allEpisode(sort: { fields: [date], order: DESC }, limit: 100) {
      edges {
        node {
          id
          title
          description
          duration
          date
          fields {
            slug
          }
        }
      }
    }
  }
`;
