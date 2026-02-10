## Mobile Development Environment Setup

This document describes the tools and steps required to develop the Expo / React Native mobile apps in this repository.

### Node.js (LTS) and Package Manager

- **Recommended Node.js version**: Latest active LTS (for example, Node.js 20 LTS).
- **Package managers**: `npm` (bundled with Node.js) is sufficient, but `yarn` and `pnpm` also work with Expo.

**Install / verify Node.js LTS**

- **macOS / Linux**
  - Install via a version manager such as `nvm`:
    - Install `nvm` following the instructions on the official repository.
    - Install Node LTS: `nvm install --lts`
    - Use Node LTS: `nvm use --lts`
  - Verify:
    - `node -v` (should show an LTS version, for example `v20.x.x`)
    - `npm -v`

- **Windows**
  - Download the LTS installer from the official Node.js website.
  - Run the installer, making sure `npm` is included.
  - Verify in a new terminal:
    - `node -v`
    - `npm -v`

### VS Code and Recommended Extensions

- **Editor**: Visual Studio Code (VS Code)
  - Install from the official VS Code website for your OS.
  - Ensure the terminal in VS Code is configured to use the same Node.js installation.

- **Recommended VS Code extensions**
  - **ESLint** – JavaScript/TypeScript linting.
  - **Prettier - Code formatter** – Consistent formatting.
  - **React Native Tools** – Debugging and React Native integration.
  - **Expo Tools** (if available) – Quality-of-life utilities for Expo projects.

### Operating System Readiness

The apps in this repository are developed and tested using Expo, which supports macOS, Windows, and Linux.

- **macOS**
  - Use the built-in Terminal or iTerm2.
  - Xcode is only required if you plan to build and run native iOS binaries locally; Expo Go does not require Xcode.

- **Windows**
  - Use PowerShell, Command Prompt, or Windows Terminal.
  - Ensure long path support is enabled if you encounter path length issues.

- **Linux**
  - Use your preferred terminal (for example, GNOME Terminal).
  - Make sure `curl` or `wget` is available if you install Node.js via a version manager.

All platforms must be able to:

- Run Node.js LTS (`node -v`).
- Access the internet to install dependencies via `npm`.
- Connect to local network addresses for Expo dev tools (for example, `http://localhost:8081`).

### Expo CLI and Expo Go

You can work with Expo apps either from the command line (using `npx expo`) or via the VS Code terminal.

**Recommended usage**

- Use `npx expo` rather than a global `expo-cli` installation to keep tooling up to date with each project.

#### Install Expo Go on Mobile Devices

Expo Go is the quickest way to run these apps on a physical device.

- **iOS (iPhone / iPad)**
  - Open the App Store.
  - Search for **“Expo Go”**.
  - Install the app.

- **Android**
  - Open Google Play Store.
  - Search for **“Expo Go”**.
  - Install the app.

#### Using Expo Go with This Repository

1. From the repository root, `cd` into a specific Expo app directory (for example, `prodev-mobile-app-0x00`).
2. Install dependencies if needed: `npm install`.
3. Start the dev server: `npx expo start` (or `npm run start` if defined).
4. In the terminal’s Expo Dev Tools output:
   - Scan the QR code with the **Expo Go** app on your iOS or Android device, or
   - Open the app in an emulator/simulator using the `a` (Android) or `i` (iOS) key bindings when available.

### Project Scaffolding and Reset Behavior

For each mobile app in this repository (for example, `prodev-mobile-app-0x00`), an Expo project is created using `npx create-expo-app` with TypeScript templates and, where required, Expo Router tabs.

- **Typical scaffolding command (example)**
  - `npx create-expo-app -t tabs@latest prodev-mobile-app-0x00`
  - or an equivalent `create-expo-app` template that includes Expo Router and TypeScript support.

Each generated app includes an `npm` script named `reset-project` in `package.json`.

#### `npm run reset-project` behavior

Running `npm run reset-project` from within an Expo app directory will:

- Delete common transient directories and files such as:
  - `node_modules`
  - the local Expo cache directory (for example, `.expo`)
  - lockfiles (`package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`) when present
- Reinstall dependencies with a clean lockfile.
- Regenerate the Metro bundler and Expo caches the next time you run `npx expo start`.

In this repository, the `reset-project` script is implemented as:

- A Node script (`reset-project.cjs`) in each Expo app directory.
- An npm script entry:
  - `"reset-project": "node reset-project.cjs"`

When you run `npm run reset-project`:

1. `reset-project.cjs` removes `node_modules`, `.expo`, and any supported lockfiles in the app directory.
2. It then runs `npm install` to reinstall dependencies.
3. The next `npm run start` (or `npx expo start`) run uses a fresh dependency tree and fresh Expo/Metro caches.

Use this script when:

- You encounter inconsistent or broken dependencies after upgrading packages.
- You want to ensure a completely clean local environment for a given Expo app.

### Challenges

No challenges encountered.

