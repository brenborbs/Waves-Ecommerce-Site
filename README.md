This is a Complete fullstack E-commerce Guitar Selling Shop.

This is my first ever big practice project in learning MERN stack.

It is made using REACT and Redux on the front-end.
The back end are made using NodeJS, expressJS framework and Mongodb NoSQL.

The app demo can be found here deployed at heroku: https://agile-plateau-67118.herokuapp.com/

Shop Features:

The app can Register new Users with their individual emails and password.
Passwords are hashed using bcrypt and crypto packages.
Jsonwebtoken are used for user tokens for sessions and authentication.

App has features for user role and admin roles.

Top products display:
On the client side, the top 3 rated products are displayed on the home page.
This is due to an API call on the back-end which fetches data from the database regarding the most sold products.

New Arrival display:
On the client side, the latest arrivals are displayed on the home page.
This is due to an API call on the back-end which fetches data from the database regarding the latest arrivals. Getting products by ID or the visitor can click on the product so they can see the product detail.

Animations:
The app features a sliding display for the different products the shop sells.
The sliding features uses the React-slick package.

Adminstration features:
The administrator of the app has a customise dashboard after they log-in to their admin role account.

File uploads:
When the admin creates a new product, they can upload the photo using React-dropzone and React-images packages. Cloudinary is used as a 3rd party cloud to save the images.
On display at the homepages and product detail, ImageLightBox package is used for product photo display.

Payment features:
When users decides to buy a guitar , they have the option to pay via their PAYPAL accounts.
The app uses react-paypal-express-checkout package for the operation.

New users can also recieved Email Greetings upon successful registration.
Nodemailer package is used for this operation or feature.

Purchase orders or PO can also be sent to paying users using the app.

Coding:
ES5, ES6+ has been used in creating this project.

Styling:
The app is not Responsive. No media querries are included in the styling.
I am focusing on REACT, Redux and NodeJS practice for this given project.