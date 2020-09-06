import React from 'react';
import { graphql } from 'gatsby';
import aboutHero from '../assets/png/about-hero.png';
import { ReactComponent as CurriculumVitae } from '../assets/svg/curriculum-vitae.svg';
import { ReactComponent as Path } from '../assets/svg/path.svg';
import { ReactComponent as Title } from '../assets/svg/title.svg';
import { ReactComponent as Visions } from '../assets/svg/visions.svg';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Header from '../components/header';
import Highlight from '../components/highlight';
import styles from './pages.module.css';

const highlights = [
  {
    icon: <Title />,
    title: 'Digital Product Designer',
    subtitle: 'Pyry Nousiainen',
    paragraph:
      'Located in Helsinki, Finland. Currently working as a senior UX designer at Houston Inc. Last 2,5 years have been good, constant learning, working tightly with huge group of talented and hard working professionals in different projects.',
  },
  {
    icon: <Path />,
    title: 'History and background',
    subtitle: 'Digital designer with B.A. from Metropolia UAS.',
    paragraph:
      '+10 years of experience from advertising agencies, digital marketing agency as an inhouse designer and nowadays working at Houston Inc. as a UX designer.',
  },
  {
    icon: <Visions />,
    title: 'Career and visions',
    subtitle: 'Digital product design is the field where the magic happens.',
    paragraph:
      'Technical aspect has always intrigued me and combining it with experience from marketing communication field led naturally towards problem solving in software development.',
  },
];

export default ({ data, ...props }) => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <Hero
      for="about"
      heroStyles={styles.aboutHero}
      heroImage={
        <img
          className={styles.aboutHeroImage}
          src={aboutHero}
          alt="Pyry Nousiainen"
        />
      }
    />
    <div className={styles.content}>
      <div className={styles.aboutHighlights}>
        {highlights.map((highlight, index) => (
          <Highlight
            key={`${highlight.title}:${index}`}
            icon={highlight.icon}
            title={highlight.title}
            subtitle={highlight.subtitle}
            paragraph={highlight.paragraph}
          />
        ))}
      </div>
      <div className={styles.aboutCV}>
        <CurriculumVitae className={styles.aboutCVIcon} />
        <div className={styles.aboutCVTitle}>
          Download Curriculum Vitae{' '}
          <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">HERE</a>.
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "about:hero" }) {
      title
      subtitle
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
