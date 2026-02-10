const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pathsToDelete = [
  'node_modules',
  '.expo',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
];

for (const relativePath of pathsToDelete) {
  const targetPath = path.join(__dirname, relativePath);
  if (fs.existsSync(targetPath)) {
    console.log(`Removing ${relativePath}...`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

console.log('Reinstalling dependencies with npm install...');
execSync('npm install', { stdio: 'inherit' });

console.log('Project reset completed.');

