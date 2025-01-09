# Automated Testing Suite for E-Commerce Website

This project demonstrates the ability to create an automated testing suite for an e-commerce website. The testing includes UI tests using Playwright and backend (API) tests using mock data. The goal is to validate various functionalities, including product catalog display, navigation to product details, cart functionality, and mock API endpoints for product retrieval and cart management.

## Table of Contents

- [Installation](#installation)
- [Test Execution](#test-execution)
- [Project Structure](#project-structure)
- [Test Scenarios](#test-scenarios)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [Continuous Integration](#continuous-integration)

## Installation

To get started, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>

   ```

2. Install the required dependencies:

```bash
npm install
```

This will install Playwright and other dependencies required for the project.

## Test Execution

### UI Tests

To run the UI tests using Playwright:

```bash
npx playwright test ui
```

### Backend Tests

To run the backend (mock API) tests:

```bash
npx playwright test api
```

### Running All Tests

To run both UI and backend tests:

```bash
npx playwright test
```

## Project Structure

```shell
/tests
  ├── ui
  │   ├── components
  │   ├── fixtures
  │   ├── pom
      ├── specs
      ├── testData
  ├── api
      ├── specs
```

- `/tests/components`: Contains UI components (card, modal) and HTML components (button, image)
- `/tests/pom`: Page Object Model for web pages
- `/tests/fixtures`: Fixtures for UI tests
- `/tests/api`: Contains tests for mock API endpoints for products and cart.
## Test Scenarios
### Part 1: UI Testing with Playwright
   * Validate product details
   * Validate add to card button functionality
   * Validate Catalog
   * Validate empty Card
### Part 1: API Testing with Playwright
* `GET /products`**: Retrieves a list of products.
* `GET /cart`**: Retrieves the list of cart items.
* `GET /products/:id`**: Retrieves details of a specific product by its ID.
* `POST /cart`**: Adds a product to the cart.
* `DELETE /cart/:id`**: Removes a product from the cart.

## Assumptions and Limitations 
- The mock API is a simple simulation of backend functionality and does not involve real data.
- The UI tests are based on the assumption that the e-commerce website is accessible at `https://www.demoblaze.com`.

### Continuous Integration

This project uses **GitHub Actions** to automate the execution of Playwright tests. The workflow is triggered on every push or pull request to the `main` or `master` branches. It ensures that the test suite is consistently validated in a clean environment.

#### Key Features of the Workflow
- Automatically installs project dependencies and Playwright browsers.
- Executes all Playwright tests in a Linux environment.
- Uploads test reports as artifacts for review, retained for 30 days.

#### Workflow Location
The GitHub Actions workflow is defined in `.github/workflows/playwright-tests.yml`.

