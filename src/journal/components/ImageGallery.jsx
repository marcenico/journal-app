import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img src={`${image}`} srcSet={`${image}`} alt="Note image" loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
