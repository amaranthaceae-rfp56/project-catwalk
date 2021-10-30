import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import ProductOverview from '../../components/ProductOverview/ProductOverview.jsx';

afterEach( ()=> {
  cleanup();
});

test('test', () => {
  render(<ProductOverview/>);
  const item = screen.getByTestId('Product-Overview');

  expect(item).toBeInTheDocument();
  expect(item).toHaveTextContent('PRODUCT OVERVIEW');
});