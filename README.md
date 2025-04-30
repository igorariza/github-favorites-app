# Single Page Application (SPA) Project

This project is a Single Page Application (SPA) that implements user authentication with Sign Up and Login features, displays a Profile Page, and lists GitHub repositories.

## Features

- User Authentication
  - Sign Up
  - Login
- Profile Page displaying user information
- List of GitHub repositories

## Technologies Used

- React
- TypeScript
- Vite
- CSS

## Project Structure

```
spa-project
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── Login.tsx
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
│   │   ├── LoginPage.tsx
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
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd spa-project
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Navigate to the Sign Up page to create a new account.
- Use the Login page to authenticate.
- Access the Profile Page to view user information and repositories.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.