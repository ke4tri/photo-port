import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PhotoList from '../PhotoList';

afterEach(cleanup);

describe('PhotoList component', () => {
    // baseline test
    it('renders', () => {
      render(<PhotoList />);
    });
  
    //snapshot test
    // it('matches snapshot', () => {
    //     const { asFragment } = render(<Nav />);
      
    //     expect(asFragment()).toMatchSnapshot();
    //   });
  })
