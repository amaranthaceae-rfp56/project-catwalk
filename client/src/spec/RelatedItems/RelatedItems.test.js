import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import RelatedItems from '../../components/RelatedItems/RelatedItems.jsx';

afterEach( ()=> {
  cleanup();
});

test('test', () => {
  render(<RelatedItems/>);
  const item = screen.getByTestId('Related-Items');

  expect(item).toBeInTheDocument();
  expect(item).toHaveTextContent('RELATED ITEMS');
});