# project-catwalk

## Technologies

![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)


## Project Catwalk
This was the front end capstone project for Hack Reactor. We were assigned to build out an e-commerce website that would meet the requirements and specifications of project stakeholders to simulate a real life work scenario. The website consists of four main components which are listed below. Our team consisted of four members who each took responsibility of an individual component and worked collaboratively to create a cohesive, fully functional website.

## Product Overview
The product overview consisted of four components. These components were the product information, style selector, cart and image gallery. The product information displays the average rating based on reviews for the particular product as well as general information on the product such as the name, category, price and social media links. The style selector is a row of buttons that allow you to update the displayed style in the image gallery on click. It also displays a dropdown with the available sizes and quantity for each size. The cart allows you to add products and displays your currently added products in a cart modal at the top of the navbar. The image gallery contains a thumbnail gallery displaying the different images for a particular style. You can scroll through the gallery with arrows and when clicking on the image, it creates an expanded view that allows you to zoom and scroll through the image when clicked.

## Related Products

## Questions and Answers

## Ratings and Reviews

## Extra Technologies Used 
- React Hooks
- React Context
- Sass

## Front End Optimization
- React Lazy Loading
  - Used React Lazy Loading on our individual components to split our main bundle.js into smaller bundles that would dynamically render as we scrolled through    the page. This ended up doubling our performance score on lighthouse
- Compression 
  - Used the compression middleware on our node server to compress our files to increase our performance
- Preloading 
  - Preloaded fonts and stylesheets


## Installation 

```html
  Run all commands in root directory

  // install modules
  npm install

  // Transpile Code
  npm run react dev

  // Start Server
  npm run start
```

## Testing
```html
  // Change into testing directory
  cd client/src/spec 

  // Run Test Code
  npm run test
```
