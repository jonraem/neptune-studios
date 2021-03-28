import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import ImageAndText from '../../components/ImageAndText/imageAndText';
import { getSortedCases } from '../../utils/helpers';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';
import useMedia from '../../hooks/useMedia';

const reversed = ['case:vare', 'case:macgregor'];
const sortOrder = ['case:vare', 'case:abb', 'case:macgregor', 'case:various'];

const Work = ({ data, ...props }) => {
  const isMobile = useMedia('(max-width: 480px)');

  return (
    <div className={pagesStyles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Studios | Work</title>
        <link rel="canonical" href="https://neptunestudios.com/work/" />
      </Helmet>
      <Header currentPath={props.path} />
      <Hero
        className={styles.workHero}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        heroClassName={styles.workHeroImage}
        heroAlt="Phone with Väppi application"
        heroImage={data.hero?.image?.fluid}
      />
      <div className={pagesStyles.content}>
        <div className={styles.workCases}>
          {getSortedCases(data.allContentfulCase.edges, sortOrder).map(edge => {
            return (
              <ImageAndText
                key={edge.node.contentfulid}
                title={edge.node.title}
                description={edge.node.description.description}
                linkTo={edge.node.URL}
                imagePath={edge.node.image && edge.node.image.fluid}
                imageSideStyle={
                  edge.node.contentfulid === 'case:various'
                    ? {
                        justifyContent: 'flex-end',
                        padding: '0',
                        paddingTop: '1rem',
                        marginRight: '-8rem',
                        width: '55%',
                      }
                    : undefined
                }
                isReversed={
                  isMobile || reversed.includes(edge.node.contentfulid)
                }
                hasGreyBackground={!reversed.includes(edge.node.contentfulid)}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "work:hero" }) {
      title
      subtitle
      description {
        raw
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    allContentfulCase {
      edges {
        node {
          contentfulid
          title
          description {
            description
          }
          URL
          image {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
