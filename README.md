# Amaranthaceae Retail Portal

![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)


## Mission
This was the front end capstone project for Hack Reactor. We were assigned to build out an e-commerce website that would meet the requirements and specifications of project stakeholders to simulate a real life work scenario. The website consists of four main components which are listed below. Our team consisted of four members who each took responsibility of an individual component and worked collaboratively to create a cohesive, fully functional website.

## Product Overview
The product overview consisted of four components. These components were the product information, style selector, cart and image gallery. The product information displays the average rating based on reviews for the particular product as well as general information on the product such as the name, category, price and social media links. The style selector is a row of buttons that allow you to update the displayed style in the image gallery on click. It also displays a dropdown with the available sizes and quantity for each size. The cart allows you to add products and displays your currently added products in a cart modal at the top of the navbar. The image gallery contains a thumbnail gallery displaying the different images for a particular style. You can scroll through the gallery with arrows and when clicking on the image, it creates an expanded view that allows you to zoom and scroll through the image when clicked.

## Related Products

## Questions and Answers
This widget displays a set of user-generated questions and answers related to the product currently in view.  The viewable content is controlled by buttons that allow the sets of questions and answers to expand and/or collapse on request.  A search bar dynamically filters the content that contains text matching the search term.  All images in this widget are viewable as thumbnails and upon clicking on it, open a modal window with a larger version of it.  Both questions and answers allow users to vote them helpful, but answers can also be marked reported.  To maintain the content current, users can post both quetions and answers using the provided forms that have been designed to validate input type.  Answer forms allow for photo upload.

## Ratings and Reviews

## Extra Technologies Used 
- React Hooks
  - To learn a new technology as we had previously only learned class components and the lifecycle method in React
  - Easier to work and test with
  - Cleaner looking code
- React Context
  - To store all data made to the API and storing actions to update the state    
- Sass
  - To utilize mixins to allow for similar styling across the application

## Front End Optimization
- React Lazy Loading
  - Used React Lazy Loading on our individual components to split our main bundle.js into smaller bundles that would dynamically render as we scrolled through    the page. This ended up doubling our performance score on lighthouse
- Compression 
  - Used the compression middleware on our node server to compress our files to increase our performance
- Preloading 
  - Preloaded fonts and stylesheets
- Webpack
  - Ran our build in production mode which minified our javascript bundle file

## Deployment
- We deployed our website on an AWS EC2 container using the Ubuntu 20.04 server 
- Installed node, npm and all node modules relevant to run a build of our project
- Updated in bound rules to reroute all traffic from Port 80 to Port 3000 as our server hosts our client on Port 3000

## Future Enhancements
- Server side rendering to send a basic skeleton of our html to the client on first load
- Making our first API call on initial render to be on the server and sending the client a stringified version of the html with the necessary data
- Reducing our image sizes by converting them to WebP
- Caching our API calls within our server for faster load times on repeat API calls
- Creating a service worker that allows our website to be displayed even when offline
- Reducing the amount of unnecessary rerenders on the client side

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
