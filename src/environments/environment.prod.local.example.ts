import { environment as baseEnvironment } from './environment.prod';

// Copy this file to environment.prod.local.ts and set your real key.
// environment.prod.local.ts is gitignored and used only for local production builds.
export const environment = {
  ...baseEnvironment,
  GOOGLE_MAPS_API_KEY: 'YOUR_GOOGLE_MAPS_API_KEY',
};
