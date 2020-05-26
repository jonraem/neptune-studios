import React from 'react';
import Header from '../components/header';
import Highlight from '../components/highlight';
import Footer from '../components/footer';
import styles from './pages.module.css';
import pyryHero from '../assets/png/pyry-hero.png';
import { ReactComponent as Title } from '../assets/svg/title.svg';
import { ReactComponent as Path } from '../assets/svg/path.svg';
import { ReactComponent as Visions } from '../assets/svg/visions.svg';
import { ReactComponent as CurriculumVitae } from '../assets/svg/curriculum-vitae.svg';

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

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.aboutHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>About</div>
          <h1>Neptune's finest</h1>
        </div>
        <div className={styles.subtitle}>
          Neptune Studios is a one man’s vision and voyage in the seas of design
          and problem solving.
        </div>
      </div>
      <img
        className={styles.aboutHeroImage}
        src={pyryHero}
        alt="Pyry Nousiainen"
      />
    </div>
    <div className={styles.content}>
      <div className={styles.aboutHighlights}>
        {highlights.map(highlight => (
          <Highlight
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
