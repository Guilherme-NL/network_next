## Deploy:

The application can be accessed via the URL:

### https://network-next-two.vercel.app/network

## Proposal:

A platform similar to a social network that includes a login screen for users to access, where they can post, edit and delete posts, as well as interact with other users on the network.
<br/>

## Technologies:

This is a Next.js project. Next.js is a powerful tool for creating web applications with advanced features in React. It offers server-side rendering (SSR), static page generation, and server-side routing, making it easier for developers to create fast and efficient web applications.
<br/>

SSR allowed for the initial request of posts from the API to be made on the server-side. As a result, the client receives a pre-rendered HTML page with the available post data, which can significantly improve the user experience as the page is displayed faster. In addition, server-side page pre-rendering is recognized by search engines, which can improve the application's ranking on search results pages. This can lead to increased organic traffic and user engagement. SSR can also improve accessibility for users who use assistive technologies, such as screen readers, as the pre-rendered HTML page is more easily processed by these technologies than a page rendered on the client-side.
<br/>

To manage the application state, we use Redux. Redux is one of the most popular state management solutions in the React ecosystem. It keeps the application state in a single source of truth, making it easier for developers to manage and update the application state.

## Curiosities of the application

- Redux is responsible for managing the entire application state, from the user's name to the created, edited, and deleted posts.
- We used Redux Toolkit, which automatically exports actions from the slice, eliminating the need to use the "src/actions" directory.
- In the "src/services" folder, we use a service to abstract the requests made to the external API.
- In the "src/utils" folder, we added functions that allow adding the time elapsed since a post was published (known as "timeAgo") to the data retrieved from the API. This function is called directly in the redux builder, updating the state of the entire application.

## Bonus points:

- Responsive page for mobile devices;
- Login and logout solution: The "/network" page cannot be accessed if the username is not provided. Additionally, after logging in, it is no longer possible to access the "/" page in order to log in as another user without first logging out. The user's login is persisted in the localStorage;
- Infinite scroll with loader: When reaching the end of the page, 10 more posts are requested from the API.
- Other ideas: If the Redux state is an error, a message will be displayed on the screen, just below the post creation field.

## Application usage

1. Clone the repository:

```
https://github.com/Guilherme-NL/network_next.git
```

2. Create an .env.local file with the same information as the .env.example file:

```
NEXT_PUBLIC_API_URL=https://dev.codeleap.co.uk/careers/
API_URL=https://dev.codeleap.co.uk/careers/
```

3. In the terminal, inside the cloned folder, type:

```
npm install
npm run dev
```
