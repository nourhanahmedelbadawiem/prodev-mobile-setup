## prodev-mobile-app-0x00

### Scaffolding

- Created using Expo Router tabs template:
  - `npx create-expo-app -t tabs@latest prodev-mobile-app-0x00`
- The project uses Expo Router with a tabs layout in the `app/(tabs)` directory.
- Updated the first tab screen at `app/(tabs)/index.tsx` so the main title text reads:
  - **“First App Created”**

### Reset Script

- Added a reset helper script:
  - File: `reset-project.cjs`
  - Script in `package.json`:
    - `"reset-project": "node reset-project.cjs"`

### Observations after `npm run reset-project`

- Running `npm run reset-project`:
  - Deletes `node_modules`, common lockfiles, and Expo cache folders in the app directory.
  - Re-runs `npm install` to recreate a clean dependency tree.
- After the reset:
  - `npx expo start` / `npm run web` starts successfully.
  - The updated tab screen still displays **“First App Created”** as expected.

