/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import '../styles/global';
import { graphql } from 'gatsby'
import PhotoGallery from '../components/PhotoGallery'

export default class Newborn extends React.Component {

    render() {
        const { images } = this.props.data;

        return (
            <div>
                <PhotoGallery images={images}></PhotoGallery>
            </div>
        );
    }
}

export const query = graphql`
query NewbornPics {
  images: allFile( filter: {fields: {newborn: {eq: "true"}}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      id
      fields {
        newborn
        source
        fileName
      }
      }
    }
  }
} 
`;
