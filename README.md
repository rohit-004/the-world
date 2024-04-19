# React Country Information App

This project is a React application that allows users to browse and search for information about countries. It includes features such as filtering countries by region and searching countries by name.

## Project Structure

The project consists of the following files:

- **index.js**: Entry point of the application. It renders the root component of the React app and wraps it with React Strict Mode.
- **App.js**: Main component of the application. It sets up routing using React Router and defines routes for different pages.
- **Home.js**: Component responsible for rendering the home page of the application. It includes functionality for filtering countries by name and region, and displays a list of countries.
- **CountryDetail.js**: Component responsible for rendering detailed information about a specific country. It fetches and displays information about the country such as name, capital, population, and currencies.
- **CountryCard.js**: Reusable component responsible for rendering individual country cards. It displays basic information about a country such as name, capital, and population.
- **Services/index.js**: File containing functions to interact with the REST Countries API. It includes functions to fetch all countries and details about a specific country.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/react-country-info-app.git`
2. Navigate to the project directory: `cd react-country-info-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to view the application.

## Dependencies

The project uses the following dependencies:

- React
- React Router
- Material-UI for styling components
- Axios for making HTTP requests

## Credits

This project uses data from the [REST Countries API](https://restcountries.com/), which provides information about countries worldwide.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
