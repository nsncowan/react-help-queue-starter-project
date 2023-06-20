
## 7 . 20 : React with NoSQL - Client-Side Routing
- Firebase offers more than just a database solution; it also provides an easy-to-implement authentication solution.
- The Help Queue application will incorporate Firebase authentication.
- A separate sign-in page will be added to the application, accessible through a sign-in link in the header.
- Client-side routing will be implemented, which is different from server-side routing used by tools like .NET and Rails.
- Server-side routing involves the client sending requests to the server for each new page, while the server responds with the necessary resources.
- Client-side routing, used by tools like React Router, shifts the routing responsibility to the client (browser), resulting in faster navigation and rendering.
- With client-side routing, the server initially sends a JavaScript file containing all the resources for the entire site.
- When the user navigates to a different part of the site, the client locates the content within the browser's resources without sending a new request to the server.
- Client-side routing allows for faster concurrent calls to APIs and databases during the rendering process.
- In the next lesson, client-side routing with React Router will be added to the Help Queue application.
- After adding the router and sign-in page, Firebase authentication will be integrated into the application.

## 7 . 21 : React Router
- React Router is an external library that simplifies routing in React applications.
- Install React Router using the command: `npm install react-router-dom@6`.
- React Router provides several components: `<BrowserRouter>`, `<Routes>`, `<Route>`, and `<Link>`.
- `<BrowserRouter>` is added to the root component (`<App>`) to enable routing functionality.
- `<Routes>` component is used to define multiple routes.
- `<Route>` component specifies the component to render and the corresponding path for routing.
- `<Link>` component is used to create links to client-side routes.
- Create a `SignIn` component with placeholder text for the sign-in page.
- Update the `App` component to include the router and define routes.
- Wrap the content in the `App` component with `<Router>`.
- The `Header` component is placed outside the `<Routes>` component and shows on all pages.
- Use `<Route>` components to define routes with their corresponding paths and elements.
- Run the application and manually navigate to the sign-in route.
- Add links to different routes in the `Header` component using `<Link>`.
- Import `<Link>` from "react-router-dom" and use it to create links.
- Test the application by clicking on the links in the header to navigate between routes.
- Proceed to add authentication to the application.
- Refer to the React Router documentation for more information on using React Router.

## 7 . 22 : Firebase Authentication
- The goal is to expand the Help Queue's functionality for online Epicodus students by adding Firebase authentication and authorization.
- Firebase authentication will be used to make the queue accessible only to signed-in users.
- The Firebase console needs to be activated for authentication by enabling the Email/Password sign-in method.
- The Firebase configuration in the source code needs to be updated to include authentication using the `getAuth()` function.
- The `auth` variable is exported along with the `db` variable from `firebase.js`.
- The `db` import in `TicketControl.js` needs to be updated to destructure `db` from the exported object.
- The `SignIn` component will be used for sign-up, sign-in, and sign-out functionality.
- A sign-up form is created, and the `doSignUp()` function handles the sign-up process using `createUserWithEmailAndPassword()`.
- A success or error message is displayed based on the sign-up result using the `useState` hook.
- A sign-in form is created, and the `doSignIn()` function handles the sign-in process using `signInWithEmailAndPassword()`.
- A sign-out button is added, and the `doSignOut()` function handles the sign-out process using `signOut()`.
- Success or error messages are displayed for the sign-out process using the `useState` hook.
- The lesson emphasizes using simple Firebase authentication implementation without additional libraries.

## 7 . 22 : Firebase Authorization
- In the previous lesson, Firebase authentication was added to the SignIn component, but it didn't affect the application's functionality.
- In this lesson, basic authorization is added to lock down the queue if a user is not signed in.
- The Auth instance from firebase.js is imported to access user data, such as the currently signed-in user.
- The TicketControl component is modified to include an if-else statement for authorization.
- If auth.currentUser is null, a message is displayed stating that the user must be signed in to access the queue.
- If auth.currentUser is not null, the ticket UI logic is executed.
- The new code for authorization is integrated into the existing ticket UI logic.
- The auth.currentUser property represents the currently signed-in user, and if it is null, there is no user signed in.
- The error variable holds any errors generated during the database query.
- The User object represents a signed-in user and extends functionality from the UserInfo class, which stores user information.
- More robust authentication and authorization may be required for larger applications.
- Further information on authentication methods can be found in the Firebase documentation.