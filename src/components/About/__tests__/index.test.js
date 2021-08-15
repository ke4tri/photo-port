import React from 'react';
import { render, cleanup } from '@testing-library/react';
//import '@testing-library/jest-dom';
import About from '..';

afterEach(cleanup);


  describe('About component', () => {
    // First Test
    // it and test can be used interchangeably
    it('renders', () => {
        render(<About />);
      });
  
    // Second Test
    it('matches snapshot', () => {
      const { asFragment } = render(<About />);
    
      expect(asFragment()).toMatchSnapshot();
    });

  });