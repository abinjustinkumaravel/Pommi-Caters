# Pommi-Caters

This project is a Vanilla JavaScript application set up with Vite, providing a fast and efficient development environment. This README outlines the setup process, project structure, and useful commands to get started.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [Available Scripts](#available-scripts)
5. [Environment Variables](#environment-variables)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Project Overview

Pommi-Caters is a web-based platform designed using Vanilla JavaScript and Vite. The project leverages Vite's fast build tool to improve the development experience.

## Project Structure

The directory structure of the project is as follows:

```
POMMI-CATERS/
│
├── .vscode/                   # Visual Studio Code settings
├── assets/                    # Assets directory
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── script.js          # Main JavaScript file
│   └── images/                # Image assets
├── dist/                      # Build output directory
│   ├── assets/
│   ├── index.html
│   └── vite.svg
├── public/                    # Static assets to serve
│   ├── vite.svg
│   └── _header
├── .env                       # Environment variables
├── .gitignore                 # Git ignore file
├── index.html                 # Main HTML file
├── LICENSE                    # License file
├── main.js                    # Entry JavaScript file
├── package.json               # Project configuration and dependencies
├── package-lock.json          # Exact versions of installed dependencies
├── README.md                  # Project documentation (this file)
└── style-guide.md             # Style guide for the project
```

## Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/abinjustinkumaravel/Pommi-Caters.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Pommi-Caters
   ```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then run the following command to install all dependencies:

```bash
npm install
```

### 3. Development Server

Start the development server using Vite:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### 4. Build the Project

Generate a production build using:

```bash
npm run build
```

This will create a build in the `dist/` folder, optimized for production.

### 5. Preview the Production Build

To locally serve the production build, run:

```bash
npm run preview
```

## Available Scripts

- **`npm run dev`**: Starts the Vite development server.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Serves the production build locally.

## Environment Variables

You can define your environment variables in a `.env` file located in the project root. This file is used to store sensitive information such as API keys or configuration values.

Example `.env` file:

```
VITE_API_URL=https://api.example.com
```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository** and clone your fork to your local machine.
2. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "Add feature XYZ"
   ```
4. **Push your branch** to your GitHub fork:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request** against the `main` branch of this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Contact

For any questions or feedback, please feel free to reach out via GitHub issues.

GitHub Repository: [Pommi-Caters](https://github.com/abinjustinkumaravel/Pommi-Caters)
