# Starter React App

This is a starter React application built with Typescript and Firebase Authentication.

## Getting Started

First, clone the repository to your local machine:

```
git clone <repository-url>
```

Then, install the dependencies:

```
npm install
```

## Running the App

To start the development server:

```
npm start
```

The app will be available at `http://localhost:3000`.

## Features

- User Authentication: Users can sign up, log in, and log out.

## Project Structure

- `src/index.tsx`: The entry point of the application.
- `src/App.tsx`: The main App component.
- `src/components`: This directory contains all the React components.
- `src/services`: This directory contains services like authentication.
- `src/types`: This directory contains Typescript types.
- `src/styles`: This directory contains all the styles.
- `public`: This directory contains public assets like `index.html`, `favicon.ico`, and `manifest.json`.
- `package.json`: This file contains the list of project dependencies.
- `tsconfig.json`: This file contains the Typescript configuration.
- `.env`: This file contains environment variables.
- `.gitignore`: This file lists files and directories that should be ignored by Git.

## Environment Variables

You need to set up your Firebase configuration in the `.env` file:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)