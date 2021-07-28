import React from 'react';
import { capitalizeFirstLetter } from '../../src/utils/helpers'
import PhotoList from './PhotoList'


function Gallery({ currentCategory }) {
 // console.log(currentCategory);
    const { name, description } = currentCategory;

    console.log(currentCategory.name);
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        
        <PhotoList 
        category ={currentCategory}
        />
      </section>
    );
  }

export default Gallery;