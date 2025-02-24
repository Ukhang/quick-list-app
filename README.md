# Quick List App

A multi-platform list management application built with cutting-edge technologies, offering real-time synchronization while prioritizing offline-first functionality.

![preview](https://github.com/user-attachments/assets/37c45afd-bbe9-49b5-b31e-ead134ff0851)

---

## Tech Stack

- **Expo** - React Native framework for cross-platform development
- **TinyBase** - Local-first database for efficient offline data handling
- **Clerk** - Authentication & user management
- **Cloudflare Workers** - Edge computing & hosting for ultra-fast performance

## Features

-  **Multi-platform Support** – Run on iOS, Android, and Web seamlessly
-  **Real-time Synchronization** – Keep data updated across devices
-  **Offline-first Approach** – Access lists even when offline
-  **Secure Authentication** – User authentication powered by Clerk
-  **Blazing Fast Edge Deployment** – Hosted on Cloudflare Workers
-  **Theming Support** – Customize UI with dark/light mode

## 🛠️ Setup & Installation

### Client Setup (Expo)

Navigate to the client directory:

```sh
cd client
```

Install dependencies:

```sh
npm install
```

Configure environment variables:

```sh
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
EXPO_PUBLIC_SYNC_SERVER_URL=
```

Fill in required values (see **Environment Variables** section).

Start the development server:

```sh
npm start
```

The app can be run on iOS, Android, or Web using Expo Go.

### Server Setup (Synchronization)

Navigate to the server directory:

```sh
cd server
```

Install dependencies:

```sh
npm install
```

Start local development server:

```sh
npm dev
```

Deploy to Cloudflare Workers:

```sh
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo, open an issue, or submit a pull request.

## 📜 License

This project is licensed under the MIT License.
