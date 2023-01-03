import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../style.css';


function Gallery() {
    const images = [
        {
          original: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
        },
        {
          original: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
        },
        {
          original: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
        },
      ];

    return <ImageGallery items={images} />;
}

export default Gallery