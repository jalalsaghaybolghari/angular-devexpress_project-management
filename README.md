
# Project Management

## Overview

**Project Management System** is a web-based application designed to help manage projects and tasks efficiently. It provides features such as user registration, project creation, task assignment, and tracking progress.

This project is built using Angular 17 and incorporates various modern technologies and tools like RxJS, NgRx, DevExpress, Jest, Cypress, and Docker for CI/CD and containerization.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [CI/CD](#ci-cd)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (Login & Register)
- Project creation, management, and deletion
- Task assignment, management, and tracking
- Responsive UI using DevExpress components
- State management with NgRx
- Reactive programming with RxJS
- Unit tests with Jest and End-to-End (E2E) testing with Cypress

## Technologies

- **Angular 17** - Frontend framework
- **RxJS** - Reactive programming
- **NgRx** - State management
- **DevExpress** - Component library
- **Jest** - Unit testing framework
- **Cypress** - E2E testing framework
- **Docker** - Containerization
- **GitHub Actions** - CI/CD for automated testing and deployment

## Project Structure

```
project-management-system/
├── cypress/                # End-to-end test folder (Cypress)
│   ├── e2e/
│   │   ├── auth/
│   │   ├   |── login-page.spec.cy.ts
│   │   ├   |── register-page.spec.cy.ts
│   ├── fixtures/
│   │   ├── user.json
│   ├── page-objects/
│   │   ├── loginPage.ts
│   │   ├── registerPage.ts
├── src/                 # Application source code
│   ├── app/             # Core application code
│   │   ├── core/        # Project core modules (auth, interceptors,guard, login, register)
│   │   ├── features/    # Project modules (projects, tasks)
│   │   ├── layouts/     # Project style 
│   │   ├── shared/      # Reusable shared components
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── environments/    # Environment-specific configurations
├── jest.config.js       # Jest configuration for unit tests
├── cypress.config.js    # Cypress configuration for e2e tests
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker compose for multi-container setup
├── angular.json         # Angular CLI configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Docker
- Angular CLI (Optional for local development)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jalalsaghaybolghari/angular-devexpress__project-management.git
   cd angular-devexpress__project-management
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment:**
   Create a `.env` file in the root directory and configure environment variables for the application (e.g., API endpoints, database credentials).

4. **Run the project locally:**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:4201`.

## Running the Application

### Development

To run the application in development mode with live reloading, use the following command:

```bash
npm run start
```

### Docker

To run the application using Docker, use the following steps:

1. **Build the Docker image:**
   ```bash
   docker build -t angular-devexpress__project-management .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 4201:4201 angular-devexpress__project-management
   ```

Alternatively, you can use Docker Compose:

```bash
docker-compose up
```

The application will be available at `http://localhost:4201`.

## Testing

### Unit Tests

Run unit tests using Jest:

```bash
npm run test
```

### End-to-End (E2E) Tests

Run E2E tests using Cypress:

```bash
npm run e2e
```

### Test Coverage

To generate test coverage report, run:

```bash
npm run test:coverage
```

## CI/CD



## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please ensure that all tests pass and the code adheres to the project style guide.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
