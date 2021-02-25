import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Img from 'gatsby-image';
import React from 'react';

export const renderVariousShowcaseImages = currentShowcase => {
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
            <Img
              key={image.id}
              fluid={image.fluid}
              style={{ width: '13rem', height: '13rem' }}
              imgStyle={{
                width: '92%',
                height: '12rem',
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
          <Img
            fluid={currentShowcase.node.images[0].fluid}
            style={{ width: '36%' }}
            imgStyle={{
              width: '100%',
              height: '36rem',
              left: 0,
              right: 0,
              margin: '0 auto',
              objectFit: 'contain',
            }}
          />
          <Img
            fluid={currentShowcase.node.images[1].fluid}
            style={{ width: '36%' }}
            imgStyle={{
              width: '100%',
              height: '36rem',
              left: 0,
              right: 0,
              margin: '0 auto',
              objectFit: 'contain',
            }}
          />
        </>
      );
    case 'work:various:showcase3':
      return (
        <>
          <Img
            fluid={currentShowcase.node.images[0].fluid}
            style={{
              width: '22rem',
              minWidth: '22rem',
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
          <Img
            fluid={currentShowcase.node.images[1].fluid}
            style={{
              width: '22rem',
              minWidth: '22rem',
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
          <div style={{ width: '17rem', height: '33rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Img
                fluid={currentShowcase.node.images[2].fluid}
                style={{
                  width: '16.5rem',
                  height: '16rem',
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
              <Img
                fluid={currentShowcase.node.images[3].fluid}
                style={{
                  width: '16.5rem',
                  height: '16rem',
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
            <Img
              key={image.id}
              fluid={image.fluid}
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
        <Carousel draggabble>
          {currentShowcase.node.images.map(currentShowcaseImage => (
            <Img
              fluid={currentShowcaseImage.fluid}
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
        <Carousel draggable>
          {currentShowcase.node.images.map(image => (
            <Img
              key={image.id}
              fluid={image.fluid}
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
