import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['./src/jest-setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    /**
     * To prevent jest throw error "Cannot use import statement outside module" at the jest-setup.ts file
     */
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-transformer-svg'
  }
};

export default config;
