//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from '../src/utils/helpers';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
   // document.title = currentCategory.name;
  }, [currentCategory]);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
        <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
