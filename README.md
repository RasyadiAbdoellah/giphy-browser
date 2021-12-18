# Giphy SPA Client

## About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Redux for state management. Some code from other projects I've done, mainly Redux logic and some styling, was used as a starting point.

## Technologies used

- React
- Redux
- SASS
- Axios for sending API requests
- Redux-thunk to create complex redux actions needed for API requests

## Component Design

Below is a list of all components with explanation on what they do.

- **MainContainer** - This is the top-level Redux-connected component. Requests to the API, list of received GIFs, selected GIF for detail view, and various UI flags based on API request status are available here as props. MainContainer renders all other components and passes down their required data and functions.

- **MainNav** - Renders the top navbar with search input and Random/Trending buttons. Requires apiCall prop

- **GifList** - Renders a list of gif entries. Note that GifList.js contains both the GifList component and the GifEntry component. Requires gifList prop and selectGif prop.

- **GifDetails** - Renders the .mp4 , Title (if available, shows 'Untitled GIF' if no title is found), and URL details for a selected GIF. Requires gif prop and clearGif prop

Components design follows convention for React/Redux projects in that they are split between normal React components and Redux-connected 'container' components. This is done for seperation of concerns. Containers handle all the UI logic and state modifications, and pass that down to visual components through props. This way app functionality is more centralized. Essentially, MainContainer is used to determine when, how, and what the other components render.

Additionally, if you look at the git history, you will see that there is another GifDetailContainer component that was deleted. This container was supposed to be used to help integrate frontend routing, but since that was abandoned for the time being, the container served no purpose.

## Redux

I chose to use Redux to make global state management easier to work with. API calls are handled through redux actions using `redux-thunk` and `axios`. The functions are located in `/src/redux/actions/gif.js`

## Tests

All functional components have unit tests that test what is rendered. All except `GifList` use `shallow()` to test if they render correctly without issue. `GifList` uses `mount()` to also test that the child component `GifEntry` is also rendered correctly and without issue. User interaction is also simulated and tested in components that have interactive elements, such as `MainNav`.

Since `MainContainer` is essentially a box to hold and connect the functional components in I chose to only have a shallow unit test for it, and test the Redux seperately.

The Redux actions.test only tests the API calls as they are the most complicated part of the code. Since the `apiCall` and `getMore` functions dispatch other actions, the test use the sequence of actions dispatched to assert validity.

The Redux reducers are assessed manually using `ReduxDevTools`. I found it easier to understand and debug using this tool rather than writing tests for every possible scenario.

## Local Installation

Run `npm install` after you've unzipped the folder to install all dependencies. Afterwards you can run a local version using `npm start`. Automated tests can be run using `npm test`.

## Author's Notes

My styling is a mess. I reused some scss from one of my other projects as a starting off point. Though it got me the layout I wanted pretty quickly, It's not split well, so a lot of the classes are all over the place. However I did try and keep as coherent as possible.

Originally, a feature I wished to implement was to have frontend routing that looks like:

`host-url/:requestType/:query/:pagination/:id`

so that navigating to `search/test/1/gifId` would show the 1st page of search results and the gif details for the gif with `id = gifId`. However I could not find the time to implement this feature, and ended up choosing to ensure my Redux actions and components were well-written and had thorough unit tests. However I lost valuable time trying to implement this feature, which could have been spent on other parts of this project.

Another point of frustration and delay was my initial use of Giphy's API SDK for JavaScript `giphy-js-sdk-core`. Billed as an easy-to-use wrapper for their API endpoints, I discovered pretty late in this sprint that data response from the `.random` method does not follow the GIF object schema found on GIPHY's docs or their API explorer. I eventually had to remove the SDK from the project and use `axios` to send requests to the API. Had I gone with using `axios` from the beginning, I might have had time to work fine-tuning the styles and making things reponsive.

### Update 2021-12-18

I've been using this project to assess ReactQuery for use in real-world settings. ReactQuery handles data differently to how the components are currently designed and required extensive reduction in features to get working. Experiments with ReactQuery can be found on the `query-refactor` branch.
