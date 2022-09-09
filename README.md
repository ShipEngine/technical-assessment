# ShipEngine Technical Assessment

Welcome to the ShipEngine Apps technical assessment project! Completion of this project is required to proceed to the next step.

## Instructions

The goal of this exercise is to build a basic e-commerce checkout experience. The details of implementation are up to you, and you can use additional libraries as needed – there are no constraints and multiple ways to implement the necessary features.

The application already supports listing products, adding them to a basic cart, and removing them from the cart. A React context maintains the cart state and serializes it to localStorage so that it persists between requests.

Your task is to implement the following features:

- When a user has items in their cart and the checkout button is present, clicking on the checkout button should redirect the user to a "checkout" screen
- The checkout screen should present a list of all products currently in the cart (listing their name and price)
- Next to each product on the checkout screen, there should be a button that removes the associated product from the cart when clicked
- Below the product list, there should be a form that collects the user's name and shipping address (street, city, state, and zip code)
- When the form is submitted (by clicking a button or pressing return) the user should be redirected to an order detail screen
- The order detail screen should display the following read-only information about the order:
  - A list of all products in the order (note: no "remove from cart" button should be present)
  - The shipping address entered by the user during checkout
  - A button that returns the user to the home screen

A few details to consider:

- After the order has been submitted, the cart should be cleared of all products
- The order does not need to be saved to a database or other persistent storage – it only needs to persist long enough to be displayed on the final step. How you achieve this is up to you
- There is an Express server with a single endpoint for serving the product list (`src/server/index.ts`). The assignment can be completed without adding or changing server endpoints, but you can add or change the server endpoints if your implementation calls for it
- While making the application look "pretty" is a bonus, it is not required and you will not be judged on the visual design. This exercise is focused on functional implementation
- Writing test cases is not required, but is encouraged

## Starting the assignment

The project can be completed in either TypeScript or JavaScript. Checkout the branch for your preference before you begin:

```
git checkout javascript
git checkout typescript
```

To begin the assignment, ensure you have node 16.x installed (installation options can be found here: https://nodejs.org/en/download/package-manager/), then clone this repository and install the dependencies:

```
git clone https://github.com/ShipEngine/technical-assessment.git
yarn install
```

You can now start the application server by running `yarn start`, and can access the application by navigating to http://localhost:3000 in your browser.

## Submitting the assignment

When you have completed the assignment, make sure you have committed all of your work and run the following command to generate a git patch containing your solution:

```
git format-patch origin/$(git branch --show-current) -o submission
tar -czvf submission.tar.gz submission
```

Email the resulting `submission.tar.gz` file to [se-hiring@auctane.com](mailto:se-hiring@auctane.com). This file can be found at the root of your project directory after running the above commands.