# LIT Technical test

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Exercise

Based on the backend data available from our graphQL endpoint, the application should list me in the Home page, all the posts available with a load more feature. A Category page should list us all the categories available in a sidebar, when the user drag a category from the sidebar to the main area of the page all posts of this category should be loaded, no need to add a fetch more feature this time.

Application has been bootstraped with pre-defined library, such as, Material-ui for styling, React-DND for drag and drop support and react-router-dom for routing, feel free to use it or not, it's up to you.

The only technical choice that you can't change is the use of Typescript : )

### Features

#### As a user i want to see all available posts in the Homepage of the app

- Post should display:
  - A title
  - A summary of the content which should not exceed 120 characters
  - A cover image
  - A "Read more" link to access the detail view of the Post
- When user click on the "Read more" link it should redirect him to the detail view of the post

#### As a user i want to load more available posts in the Homepage of the app

- At the bottom of the page a "load more" button should be visible
- When user click on this button, a new set of posts should be loaded
- When there is no more posts to load, button shouldn't be visible

#### As a user i want to see the details view of a Post

- When user click on the "Read more" link from a Post List it should redirect him to a detail view of the post
- When user access to this details view he should see:
  - The title of the post
  - The content of the post
  - The cover image of the post
  - The associated category title

#### As a user i want to see a list of available categories in the Category page

- When user reach the Category page, a sidebar listing all the available categories should be visible
- The sidebar should show:
  - The title of the category
  - A summary of the category description which should not exceed 30 characters

#### As a user i want to drag a category inside the main area of category page to display all posts associated to this category

- When user select a Category in the Category sidebar he should be able to drag it to the main area of the Category page
- A visual state should be added to the dragged category in order to indicate user that it's a dragging state

#### As a user i want to load all the related post of a category when user drop a category inside drop area of the Category

- When user drop a category from the sidebar to the drop area of the Category page we should load and display all the associated post
