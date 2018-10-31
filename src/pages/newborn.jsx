/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import '../styles/global';
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 3,
    isFitWidth: true
};

const masonryClass = css`
  margin: 0 auto;
`;


const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default class Newborn extends React.Component {

    render() {
        const { images } = this.props.data;

        const imageLi = images.edges.map(image => (
            <li style={{ margin: 16 }} key={image.node.id}>
                <GatsbyImage resolutions={image.node.childImageSharp.resolutions} />
            </li>
        ));

        return (
            <Masonry
                className={masonryClass}
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {imageLi}
            </Masonry>
        );
    }
}

export const query = graphql`
query NewbornPics {
  images: allFile( filter: {fields: {newborn: {eq: "true"}}}) {
    edges {
      node {
        childImageSharp {
          resolutions(width: 300) {
            ...GatsbyImageSharpResolutions
          }
        }
      id
      fields {
        newborn
      }
      }
    }
  }
} 
`;
