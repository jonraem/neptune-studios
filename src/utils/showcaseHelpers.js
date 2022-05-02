import '@brainhubeu/react-carousel/lib/style.css';

import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const renderVariousShowcaseImages = (currentShowcase, isDesktop) => {
  switch (currentShowcase.node.contentfulid) {
    case 'work:various:showcase1':
      return (
        <div
          style={{
            width: '75%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          {currentShowcase.node.images.map(image => (
            <GatsbyImage
              key={image.id}
              image={getImage(image)}
              style={{
                width: isDesktop ? '13rem' : '12.5vh',
                height: isDesktop ? '13rem' : '12.5vh',
              }}
              imgStyle={{
                width: '92%',
                height: isDesktop ? '12rem' : '11.4vh',
                left: 0,
                right: 0,
                margin: '0 auto',
                objectFit: 'contain',
                boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
              }}
            />
          ))}
        </div>
      );
    case 'work:various:showcase2':
      return (
        <>
          <GatsbyImage
            image={getImage(currentShowcase.node.images[0])}
            style={{ width: '36%' }}
            imgStyle={{
              width: '95%',
              height: isDesktop ? '36rem' : '35vh',
              left: 0,
              right: 0,
              margin: '0 auto',
              marginRight: '5%',
              objectFit: 'contain',
            }}
          />
          <GatsbyImage
            image={getImage(currentShowcase.node.images[1])}
            style={{ width: '36%' }}
            imgStyle={{
              width: '95%',
              height: isDesktop ? '36rem' : '35vh',
              left: 0,
              right: 0,
              margin: '0 auto',
              marginLeft: '5%',
              objectFit: 'contain',
            }}
          />
        </>
      );
    case 'work:various:showcase3':
      return (
        <>
          <GatsbyImage
            image={getImage(currentShowcase.node.images[0])}
            style={{
              width: isDesktop ? '22rem' : '21vh',
              minWidth: isDesktop ? '22rem' : '21vh',
              height: !isDesktop && '38vh',
              margin: '0.5rem',
              boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
            }}
            imgStyle={{
              width: '100%',
              left: 0,
              right: 0,
              margin: '0',
              borderRadius: '4px',
              objectFit: 'cover',
            }}
          />
          <GatsbyImage
            image={getImage(currentShowcase.node.images[1])}
            style={{
              width: isDesktop ? '22rem' : '21vh',
              minWidth: isDesktop ? '22rem' : '21vh',
              height: !isDesktop && '38vh',
              margin: '0.5rem',
              boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
            }}
            imgStyle={{
              width: '100%',
              left: 0,
              right: 0,
              margin: '0',
              borderRadius: '4px',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              width: isDesktop ? '17rem' : '21vh',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <GatsbyImage
                image={getImage(currentShowcase.node.images[2])}
                style={{
                  width: isDesktop ? '16.5rem' : '20vh',
                  height: isDesktop ? '16rem' : '18.2vh',
                  margin: '0.5rem',
                  boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
                }}
                imgStyle={{
                  width: '100%',
                  height: '100%',
                  left: 0,
                  right: 0,
                  margin: '0',
                  borderRadius: '4px',
                  objectFit: 'cover',
                }}
              />
              <GatsbyImage
                image={getImage(currentShowcase.node.images[3])}
                style={{
                  width: isDesktop ? '16.5rem' : '20vh',
                  height: isDesktop ? '16rem' : '18.2vh',
                  margin: '0.5rem',
                  boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
                }}
                imgStyle={{
                  width: '100%',
                  height: '100%',
                  left: 0,
                  right: 0,
                  margin: '0',
                  borderRadius: '4px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </>
      );
    default:
      return <div style={{ color: '#fff' }}>No content</div>;
  }
};

export const renderVariousMobileShowcaseImages = currentShowcase => {
  switch (currentShowcase.node.contentfulid) {
    case 'work:various:showcase1':
      return (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 'auto',
            marginBottom: '1rem',
          }}
        >
          {currentShowcase.node.images.map(image => (
            <GatsbyImage
              key={image.id}
              image={getImage(image)}
              style={{ width: '6rem', height: '6rem' }}
              imgStyle={{
                width: '75%',
                height: 'unset',
                left: 0,
                right: 0,
                margin: '0 auto',
                objectFit: 'contain',
                boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
              }}
            />
          ))}
        </div>
      );
    case 'work:various:showcase2':
      return (
        <Carousel
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          draggable
        >
          {currentShowcase.node.images.map(image => (
            <GatsbyImage
              key={image.id}
              image={getImage(image)}
              style={{ width: '80%', marginBottom: '2rem' }}
              imgStyle={{
                width: '100%',
                left: 0,
                right: 0,
                margin: '0 auto',
                objectFit: 'contain',
              }}
            />
          ))}
        </Carousel>
      );
    case 'work:various:showcase3':
      return (
        <Carousel
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={500}
          draggable
        >
          {currentShowcase.node.images.map(image => (
            <GatsbyImage
              key={image.id}
              image={getImage(image)}
              style={{ width: '90%', marginBottom: '2rem' }}
              imgStyle={{
                width: '100%',
                left: 0,
                right: 0,
                margin: '0 auto',
                objectFit: 'contain',
                boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
              }}
            />
          ))}
        </Carousel>
      );
    default:
      return <div style={{ color: '#fff' }}>No content</div>;
  }
};
