import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../Modal.js';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'lorem ipsum dolor sit amet, consteroiu lskdfj ',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    // baseline test
    it('renders', () => {
     
    });
  
    //snapshot test

  });

//   describe('Click Event', () => {
//     it('calls onClose handler',() => {
//         const {getByText} =render(
//         <Modal 
//         onClose={mockToggleModal}
//         currentPhoto={currentPhoto}
//         />);
//         fireEvent.click(getByText('Close this modal'));

//         expect(mockToggleModal).toHaveBeenCalledTimes(1);
//     })
//   });
