# barNone App

Welcome to the barNone App! Our web application allows users to discover and craft their own cocktail. Below, we'll explain the functionality of each component in the project.

## Components

### App
The `App` component serves as the main entry point for the application. It handles routing and contains the navigation bar (`NavBar`). The `App` component manages the state for searching cocktails and fetching cocktail data from an external API (`https://www.thecocktaildb.com`).

### NavBar
The `NavBar` component provides navigation links to different sections of the app, including Home, About, Search, and Form.

### Home
The `Home` component displays the home page with the app's logo and a brief description of its features.

### About
The `About` component displays a drink menu. It fetches cocktail data from a local server and passes it to the `Menu` component for rendering.

### Menu
The `Menu` component receives a list of cocktails and displays them in a list format. Each menu item links to more details about the cocktail.

### MenuItem
The `MenuItem` component takes a single cocktail and displays its name along with a unique set of ingredients. It ensures that ingredients are not repeated for the same cocktail.

### Search
The `Search` component allows users to search for cocktails by name. Users can enter a cocktail name, and upon submission, it queries an external API (`https://www.thecocktaildb.com`) to retrieve matching cocktails. The search results are displayed using the `CocktailList` component. If no cocktails match the search query, it displays an error message.

### CocktailList
The `CocktailList` component receives a list of cocktails and renders them using the `CocktailCard` component. It is used to display search results in the `Search` component.

### Form
The `Form` component allows users to craft their own custom cocktails. Users can input details such as the cocktail's name, ingredients, measurements, directions, and an image URL. Upon submission, the new cocktail is sent to a local server, and the list of created drinks is updated in the `CreatedDrinks` component.

### CreatedDrinks
The `CreatedDrinks` component displays a list of user-created cocktails. Users can delete a cocktail by clicking the "Delete" button. 

### NewDrinkCard
The `NewDrinkCard` component is used to display user-created cocktails in a card format. It can be flipped to reveal more details about the cocktail. Users can also delete the cocktail using the "Delete" button.

### CocktailCard
The `CocktailCard` component displays details of a cocktail, including its name, image, ingredients, measurements, and instructions. It can be flipped to reveal additional information.

## Usage

- Install the dependecies first and foremost using `npm install`.
- Start up the JSON Server by typing this command into your terminal: json-server --watch db.json. 
    - JSON server should be: "http://localhost:3000/createdDrinks"
- Start the application using `npm start`.
- Use the nav bar to explore different sections of the app.
- On the "Form" page, you can craft your own cocktails by providing details and submitting the form.
- On the "Search" page, you can search for cocktails by name and view the search results.
- The "About" page displays a menu of cocktails fetched from a local server.
- The "Home" page provides an introduction to the app.

Enjoy discovering and crafting your favorite cocktails with the barNone App!
