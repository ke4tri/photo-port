import React from 'react';
import { capitalizeFirstLetter } from '../../src/utils/helpers'
import PhotoList from './PhotoList'


function Gallery({ currentCategory }) {
 // console.log(currentCategory);
    const { name, description } = currentCategory;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        
        <PhotoList currentCategory={currentCategory}/>
      </section>
    );
  }

export default Gallery;