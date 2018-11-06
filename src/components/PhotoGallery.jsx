/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import '../styles/global';
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'
import Lightbox from 'react-images';

const masonryClass = css`
  display: flex;
  width: auto;
  list-style-type: none !important;
`;

const masonryColumnClass = css``;

const imageLiClass = css`
 ${tw('lg:m-2' )};
`;

export default class PhotoGallery extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props.images.edges);
        this.state = {
            shareOpen: false,
            anchorEl: null,
            lightbox: false,
            photos: props.images.edges.map(photo => Object.assign({
                src: photo.node.childImageSharp.fluid.src,
                srcSet: photo.node.childImageSharp.fluid.srcSet
            })),
        };
    }

    gotoPrevLightboxImage() {
        const { photo } = this.state;
        this.setState({ photo: photo - 1 });
    }

    gotoNextLightboxImage() {
        const { photo } = this.state;
        this.setState({ photo: photo + 1 });
    }

    openLightbox(photo, event) {
        event.preventDefault();
        this.setState({ lightbox: true, photo });
    }

    closeLightbox() {
        this.setState({ lightbox: false });
    }

    render() {
        const { images } = this.props;

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        return (
            <div>
                <Masonry
                    className={masonryClass}
                    breakpointCols={breakpointColumnsObj}
                    columnClassName={masonryColumnClass}
                >
                    {images.edges.map((photo, i) => (
                    <li className={imageLiClass} key={photo.node.id} orig={photo.node.fields.fileName}>
                        <a href={photo.node.childImageSharp.fluid.src} onClick={e => this.openLightbox(i, e)}>
                            <Img key={i} fluid={photo.node.childImageSharp.fluid} />
                        </a>
                    </li>
                    ))}
                </Masonry>
                <Lightbox
                    backdropClosesModal
                    preventScroll={false}
                    images={this.state.photos}
                    currentImage={this.state.photo}
                    isOpen={this.state.lightbox}
                    onClickPrev={() => this.gotoPrevLightboxImage()}
                    onClickNext={() => this.gotoNextLightboxImage()}
                    onClose={() => this.closeLightbox()}
                />
            </div>
        );
    }
}