# ReactFlix (Movie/Series Finder)

#### Screenshot

![Reactflix][homePage-screenshot]

#### Description

Reactflix (Movie/Series Finder) app, is a simple responsive application developed using React, React Hooks, Redux, Semantic ui and more.
It was a project where I wanted to try new things. Of course something has more than one solution. And better it can be ofcourse.

### Built With

The major frameworks used when built the project:

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [React-Hooks](https://react.dev/reference/react/hooks)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Semantic UI](https://react.semantic-ui.com/)
- [OMDb API](https://www.omdbapi.com/)
- [Axios](https://axios-http.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Scss](https://sass-lang.com/)

## Getting Started

To get a local copy up and running follow steps:

### Prerequisites

This project is currently using OMDb API. But firstly, you can continue with the steps below.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/BurakCaglayan/reactflix.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```
3. Generate API_KEY

   Go to [OMDb API](https://www.omdbapi.com/) and generate an API key.

4. Create a .env file in the root directory of your project, and save it with the following content: VITE_API_KEY=[your_API_KEY]

5. Start Project

   ```sh
   npm run dev
   ```
 

## Usage

- This application is responsive, meaning it adapts to different device sizes.
- You can easily return to the homepage by clicking on the logo, which is present on all pages.
- You can customize your Movie/Series searches. You can select the type of content you want to search for, enter the name of the movie/series you're looking for, search by a specific date, and best of all, you can clear all your selections.
- When you click the "Clear" button, the page will return to its initial state, and a Pokémon will greet you.
- When you click on a movie, it will redirect you to the detail page, where you can view all the information about that movie.
- When you go back from the detail page, all your previous selections will remain intact.
- Each page displays 10 movies, and you can navigate between pages using pagination.

### What could be better? What can be added? What would I add if I had more time?

- I developed the year and category sections on the detail page as buttons. By implementing the logic for those buttons, movies from the selected category or year could be displayed when the user clicks on them.
- Scss can be used more effectively. I didn't have to write too many styles, but by using variables, we can make everything cleaner and more manageable.
- A "Select All" option could be added to the type selection dropdown.
- There are some minor style issues in the overall design that could be fixed.
- Instead of sending all the parameters, we could adjust the query string based on the incoming data. For example, if the `type` value is not provided, there's no need to include it in the query string. A function or logic could be written to handle this, making the parameters more flexible.
- Unit tests could be written.

#### Screenshot

![Reactflix Mobile Home][homePageMobile-screenshot]

![Reactflix Detail Page][detailPage-screenshot]

![Reactflix Detail Page Mobile][detailPageMobile-screenshot]

[homePage-screenshot]: https://i.ibb.co/mC3d4n6/Screenshot-2025-01-20-at-03-37-35.png
[homePageMobile-screenshot]: https://i.ibb.co/bKWRnkn/Screenshot-2025-01-20-at-03-38-45.png
[detailPage-screenshot]: https://i.ibb.co/1Xw8Gdn/Screenshot-2025-01-20-at-03-39-01.png
[detailPageMobile-screenshot]: https://i.ibb.co/7tmv2Vg/Screenshot-2025-01-20-at-03-39-26.png
