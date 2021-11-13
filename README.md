# Amaranthaceae Retail Portal

![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)

![](http://g.recordit.co/ivAEZCpzW1.gif)

## Mission
This was the front end capstone project for Hack Reactor. We were assigned to build out an e-commerce website that would meet the requirements and specifications of project stakeholders to simulate a real life work scenario. The website consists of four main components which are listed below. Our team consisted of four members who each took responsibility of an individual component and worked collaboratively to create a cohesive, fully functional website.

## Product Overview
The product overview consisted of four components. These components were the product information, style selector, cart and image gallery. 

- Product Information
  - The product information displays the average rating based on reviews for the particular product as well as general information on the product such as the name, category, price and social media links.
- Style Selector
  -  The style selector is a row of buttons that allow you to update the displayed style in the image gallery on click. It also displays a dropdown with the available sizes and quantity for each size.
- Cart 
  - The cart allows you to add products and displays your currently added products in a cart modal at the top of the navbar.
- Image Gallery
  - The image gallery contains a thumbnail gallery displaying the different images for a particular style. You can scroll through the gallery with arrows and when clicking on the image, it creates an expanded view that allows you to zoom and scroll through the image when clicked.    


## Related Products
- Related Items List
  - The related items is a list related products of current overview product. Each product is a clickable card, it brings users to the main overview page about the clicked product. Once users clicked on the card and changed the view, the related item list would be change based on the current overview product. Also, on the right top corner of each related product card, there is a star button which is clickable to display the similarity and different of current overview product and current related product.  
- Outfit List
  - Each user has their own unique lists for the outfit. Users could add current overview product to their outfit lists by clicking the first card. The outfit list has similar function as related item. When you click on the outfit card, the overview would change to the product users clicked. Also, if users don’t like their added outfit product, they could easily remove it by clicking the cross button on the right top corner of each card.


## Questions and Answers
This widget displays a set of user-generated questions and answers related to the product currently in view.  The viewable content is controlled by buttons that allow the sets of questions and answers to expand and/or collapse on request.  A search bar dynamically filters the content that contains text matching the search term.  All images in this widget are viewable as thumbnails and upon clicking on them, open a modal window with a larger version.  Both questions and answers allow users to vote them helpful, but answers can also be marked reported.  To maintain the content current, users can post both quetions and answers using the provided forms that have been designed to validate input type.  Answer forms allow for photo upload.

## Ratings and Reviews
This widget is a combination of two main (ReviewsList/RatingsData) components comprised of many subcomponents. The main components utilize data acquired from an API that is stored client side within the ReviewContext. This context contains various information about a specific product, such as an array of review objects (Which contains data from users entered for their review.), a reviewMeta data object (Which contains information about average scores and ratings given from all reviews).
	
The ReviewsList component simply maps over the array of reviews and passes the data as a prop to a seperate Review component. The Review  displays the information from the review object. The component is also comprised of many smaller components (StarRating, PhotoTiles, Voter, Modal/PhotoModal) which all utilize the handed down data stored in the prop to display review unique data. Reviews are sorted based on the value of the html select element that is located at the top of the ReviewList component. So rating is done by the helpfulness of a review (value within the review object), the date created (newest to oldest), and “Relevance” which is a weighted combination of helpfulness and date created. Reviews are displayed two at a time if there are more reviews not yet display a button “More Reviews” can be clicked to display up to two additional reviews inside of the scrolling window. Users can create reviews by clicking the “Add Review” button which opens a modal window containing a form requiring user input for Title/Summary, Regex verified email, review body, a star rating, and several radio buttons for different traits of the product. There is also optional inputs for recommending and attaching image urls. Once al required fields are filled the form can be submitted and stored in the API database.
		
The RatingsData component is also made of two main subcomponents. The BarGraph and the Characteristics components. The BarGraph displays the count of each different rating given by a review. (5 star: count, 4 star: count, ….) The Characteristics display a meter for each of the varying traits a product can have. An arrow is positioned to display the average score of the given trait. These components are similar in that the dynamic functionality is created using CSS variables to set the either the width or positioning of the indicators.
  
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

## Business Rule Documents
- [Business Requirements](https://docs.google.com/document/d/1KAqduzY8ae3DYrSoCL1i23qHe95zJRYFulqMk-sGLWY/edit#)
- [Visual Design](https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/?fullscreen)
- [API](https://learn-2.galvanize.com/cohorts/2967/blocks/94/content_files/Front%20End%20Capstone/phases/phase_0.md)

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
