import React from 'react';
import { capitalizeFirstLetter } from '../../src/utils/helpers'
import PhotoList from '../components/PhotoList'

// function Gallery(){
//     const currentCategory = {
//         name:"commercial",
//         description:
//             "Photos of grocery stores, food trucks, and other commercial projects"
//     };
//     return(
//         <section>
//             <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
//             <p>{currentCategory.name}</p>
//             <PhotoList />
//         </section>
//     );
// }

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <PhotoList  />
      </section>
    );
  }

export default Gallery;