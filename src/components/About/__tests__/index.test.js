import React from 'react';
import { render, cleanup } from '@testing-library/react';
//import { render, cleanup } from '@testing-library/react';
import About from '..';

afterEach(cleanup);


  describe('About component', () => {
    // First Test
    // it and test can be used interchangeably
    it('renders', () => {
        render(<About />);
      });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
  });