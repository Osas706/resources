import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', 
  timeout: 30 * 1000,
  retries: 1,
  use: {
    baseURL: 'https://resources-xi.vercel.app/resources',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,             
    reuseExistingServer: !process.env.CI,
  },
});
