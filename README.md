# Single Page Application (SPA) Project

This project is a Single Page Application (SPA) that implements user authentication with Sign Up and Login features, displays a Profile Page, and lists GitHub repositories.

## Features

- User Authentication
  - Sign Up
- Profile Page displaying user information
- List of GitHub repositories

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- Axios for API calls
- Auth0 for authentication

## Project Structure

```

├── index.html
└── favicon.ico
├── src
│   ├── components
│   │   ├── Auth
│   │   │   └── SignUp.tsx
│   │   ├── Profile
│   │   │   └── ProfilePage.tsx
│   │   └── Repositories
│   │       └── RepositoriesList.tsx
│   ├── context
│   │   └── AuthContext.tsx
│   ├── hooks
│   │   └── useAuth.ts
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── SignUpPage.tsx
│   │   └── ProfilePage.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── authService.ts
│   ├── styles
│   │   ├── global.css
│   │   └── components.css
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/igorariza/github-favorites-app.git
   ```

2. Navigate to the project directory:
   ```
   cd spa-project
   ```
3. Create a `.env` file in the root directory and configure the following variables:
```properties
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
GITHUB_API_URL=https://api.github.com
```
   Replace `your-auth0-domain` and `your-auth0-client-id` with your Auth0 credentials.
   Replace `GITHUB_API_URL` with the GitHub API URL if needed.
   Make sure to set up your Auth0 application to allow the redirect URI to your local development URL (e.g., `http://localhost:3000`).
4. Install dependencies:
   ```
   npm install
   ```

5. Start the server:
   ```
   npm run start
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Navigate to the Sign Up page to create a new account.
- Use the Login page to authenticate.
- Access the Profile Page to view user information and repositories.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.