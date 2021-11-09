import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import ProductOverview from '../../components/ProductOverview/ProductOverview.jsx';
import ProductNavbar from '../../components/ProductOverview/product-navbar/product-navbar.component.jsx'
import ProductDropdown from '../../components/ProductOverview/product-dropdown/product-dropdown.component.jsx'
import ProductExpandedView from '../../components/ProductOverview/product-expanded-view/product-expanded-view.component.jsx'
import ProductImageGallery from '../../components/ProductOverview/product-image-gallery/product-image-gallery.component.jsx'
import ProductStyleSelector from '../../components/ProductOverview/product-style-selector/product-style-selector.component.jsx'

afterEach(()=> {
  cleanup();
});


describe('Product Overview Testing', () => {
  test('test', () => {
    render(<ProductOverview/>);
    const item = screen.getByTestId('Product-Overview');

    expect(item).toBeInTheDocument();
    expect(item).toHaveTextContent('PRODUCT OVERVIEW');
  });
})

describe.only('Product Navbar Testing', () => {
  test("Renders navbar links", () => {
    render(<ProductNavbar />);

    const navbarLink = screen.getByText("Related");
    expect(navbarLink).toBeInTheDocument();
  })
})

// test('snapshots', () => {
//   const tree = renderer.create(<ProductOverview/>).toJSON();
//   console.log(tree);
//   expect(tree).toMatchSnapshot();
// });