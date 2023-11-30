# USSD Server with Africa's Talking Simulator

This project is a Node.js USSD server developed for use with Africa's Talking USSD Simulator. The server provides a menu-based USSD interface for users to access information and services related to road safety and support.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-ussd-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-ussd-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To run the USSD server locally, use the following command:

```bash
npm start
```

This will start the server on port 8001 by default. Update the `PORT` variable in `app.js` if you want to use a different port.

## Deployment

Deploy your USSD server to a hosting platform. Follow the platform-specific instructions for deployment. Example: [Deploying on Vercel](#link-to-your-specific-deployment-guide).

Configure your Africa's Talking USSD Simulator to send requests to the deployed server's public URL.

## Endpoints

- **POST /:**

  This endpoint handles USSD requests and provides menu-based responses.

  Example:

  ```bash
  curl -X POST http://your-deployed-server.com -d '{"sessionId": "123", "serviceCode": "XYZ", "phoneNumber": "987654321", "text": "1"}'
  ```

  Replace the URL with your deployed server's URL.

## Testing

Use the Africa's Talking USSD Simulator to test your USSD application. Ensure that the server responds correctly to different menu options.

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).
git 
