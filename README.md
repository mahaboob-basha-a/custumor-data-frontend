# Customer Data Form Application

## Overview

This application is a simple Customer Data Form that allows users to input customer information and view a display grid of submitted data. The frontend is built with React, and the backend is developed using Node.js and Express.js. The application includes form validation and error handling. 

## Features

- Input form with fields for phone number, name, email, address, and current organization.
- Display grid that shows submitted customer data.
- Responsive design for optimal viewing on different devices.
- Error handling for form validation.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Data Fetching**: Axios

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation
API Endpoints
POST /api/submit: Submit customer data. (Note: Currently using dummy data for testing.)
Frontend Structure
src/components/InputForm.js: Component for the customer data input form with validation.
src/components/DisplayGrid.js: Component to display the customer data in a grid format.
src/App.js: Main application component that includes InputForm and DisplayGrid.
Backend Structure
server.js: Main server file for setting up Express and API routes.
routes/api.js: Contains the API routes and logic for handling requests.
Testing
Frontend: Test the React application to ensure all forms are capturing data correctly and validations are working.
Backend: Test the API endpoints separately using tools like Postman.