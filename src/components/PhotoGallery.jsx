/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import '../styles/global';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image'
import Lightbox from 'react-images';

const masonryOptions = {
    transitionDuration: 3,
    isFitWidth: true,
    gutter: 10,
    isOriginLeft: true,
    columnWidth: 1
};

const masonryClass = css`
  margin: 0 auto;
  list-style-type: none !important;
`;

const imageLiClass = css`
 ${tw('lg:m-4' )};
`;

const imagesLoadedOptions = { background: '.my-bg-image-el' };

export default class PhotoGallery extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.images.edges);
        this.state = {
            shareOpen: false,
            anchorEl: null,
            lightbox: false,
            photos: props.images.edges.map(photo => { return Object.assign({ src: photo.node.childImageSharp.fixed.src, srcSet: photo.node.childImageSharp.fixed.srcSet })}),
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

        return (
            <div>
                <Masonry
                    className={masonryClass}
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {images.edges.map((photo, i) => (
                    <li className={imageLiClass} key={photo.node.id}>
                        <a href={photo.node.childImageSharp.fixed.src} onClick={e => this.openLightbox(i, e)}>
                            <Img key={i} fixed={photo.node.childImageSharp.fixed} />
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