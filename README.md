# The World

A React application providing comprehensive data about countries. Browse, search, and filter to explore the world's nations.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Features

- **Browse Countries:** Explore a comprehensive list of countries.
- **Search:** Quickly find countries by name.
- **Filter by Region:** Narrow down your search by selecting specific regions.
- **Detailed Information:** View detailed information for each country, including:
  - Name
  - Capital
  - Population
  - Currencies
- **Responsive Design:** Enjoy a seamless experience on any device.

## Project Structure

The project consists of the following key files and directories:

- `src/`: Contains the main source code.
  - `App.js`: Main component, sets up routing.
  - `index.js`: Entry point of the application.
  - `Components/`: Reusable React components.
  - `Pages/`: React components for different routes/pages.
  - `Services/`:  Functions for interacting with the REST Countries API.
- `public/`: Contains static assets.
- `package.json`: Lists project dependencies and scripts.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rohit-004/the-world.git
   ```
2. Navigate to the project directory:
   ```bash
   cd the-world
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
   ```bash
   npm start
   ```

Open your browser and visit `http://localhost:3000` to view the application.

## Usage

The application provides a user-friendly interface for exploring country data.

1.  **Homepage:** Displays a list of countries with options to search and filter.
2.  **Country Details:** Click on a country card to view detailed information about that country.

## Dependencies

The project uses the following main dependencies:

| Package               | Version | Description                               |
| --------------------- | ------- | ----------------------------------------- |
| `react`               | ^18.2.0 | JavaScript library for building user interfaces |
| `react-router-dom`    | ^6.18.0 | DOM bindings for React Router              |
| `@mui/material`       | ^5.14.16 | Material Design UI components             |
| `@mui/icons-material` | ^5.14.16 | Material Design icons                     |
| `axios`               | ^1.6.0  | Promise based HTTP client for the browser |
| `@emotion/react`      | ^11.11.1 | CSS-in-JS library                         |
| `@emotion/styled`     | ^11.11.0 | Styled components for Emotion             |

## Contributing

Contributions are welcome! Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

This project uses data from the [REST Countries API](https://restcountries.com/), which provides information about countries worldwide.
