import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import ProductContext from '../../context/products/ProductContext.js';
import ProductState from '../../context/products/ProductState.js';
import ReviewState from '../../context/reviews/ReviewState.js';

import ProductOverview from '../../components/ProductOverview/ProductOverview.jsx';
import ProductNavbar from '../../components/ProductOverview/product-navbar/product-navbar.component.jsx'
import ProductDropdown from '../../components/ProductOverview/product-dropdown/product-dropdown.component.jsx'
import ProductExpandedView from '../../components/ProductOverview/product-expanded-view/product-expanded-view.component.jsx'
import ProductImageGallery from '../../components/ProductOverview/product-image-gallery/product-image-gallery.component.jsx'
import ProductStyleSelector from '../../components/ProductOverview/product-style-selector/product-style-selector.component.jsx'

// afterEach(()=> {
//   cleanup();
// });

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
})

describe.only('Product Overview Testing', () => {
  // test('should display product overview', () => {
  //   act(() => {
  //     ReactDOM.render(<ProductState><ReviewState><ProductOverview /></ReviewState></ProductState>, container)
  //   })
  //   var header = container.getElementsByClassName('product-name')
  //   expect(header).toBe('Heir Force Ones');
  // })
  test('product dropdown', () => {
    act(() => {
          ReactDOM.render(<ProductState><ReviewState><ProductDropdown /></ReviewState></ProductState>, container)
    })

    const example = screen.getByText('SELECT SIZE');
    expect(example).toHaveTextContent('SELECT SIZE');
    // expect(example).
    // expect(screen.getByRole('select', { name: "SELECT SIZE" }).selected).toBe(true);
    // screen.getByRole('')
    // var dropdownName = container.getElementsByClassName('product-dropdown-option');
    // console.log(dropdownName)

  })



})

// function renderProductOverview(data) {
//   return render (
//       <ProductContext.Provider value={data}>
//         <ProductOverview />
//       </ProductContext.Provider>
//   )
// }

// describe.only('Product Overview Testing', () => {
//   describe("product overview data", () => {
//     // const { container } = render(<ProductState><ProductOverview/></ProductState>)
//     const data = {
//       productInfo: {
//         id: 40348,
//         campus: "hr-rfp",
//         name: "Heir Force Ones",
//         slogan: "A sneaker dynasty",
//         description: "Nice shoes",
//         category: "kicks",
//         default_price: "99.00",
//         features: [{ feature: "sole", value: "rubber"}]
//       },
//       currentStyle: {
//         style_id: 240525,
//         name: "White & White",
//         original_price: "99.00",
//         sale_price: null,
//         default: true,
//         photos: [{thumbnail_url: "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}]
//       }
//     }

//       // test("Product Overview Test", () => {
//       //   renderProductOverview(data);
//       //   let item = screen.getByText('Heir Force Ones');
//       //   expect(item).toHaveTextContent('Heir Force Ones')
//       // })
//       beforeEach(() => {
//         render (
//           <ProductContext.Provider value={data}>
//             <ProductOverview />
//           </ProductContext.Provider>
//         )
//       })

//       let item = screen.getByText('Heir Force Ones');
//       expect(item).toHaveTextContent('Heir Force Ones');
//     })
// })

// describe('Product Navbar Testing', () => {
//   test("Renders navbar links", () => {
//     render(<ProductNavbar />);

//     const navbarLink = screen.getByText("Related");
//     expect(navbarLink).toBeInTheDocument();
//   })
// })

// test('snapshots', () => {
//   const tree = renderer.create(<ProductOverview/>).toJSON();
//   console.log(tree);
//   expect(tree).toMatchSnapshot();
// });