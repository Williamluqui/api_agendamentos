/* eslint-disable max-len */
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "/tmp/jest_rs",

    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    //collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    //testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // correction @ from paste import ../../../
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
    },

    // A preset that is used as a base for Jest's configuration
    preset: 'ts-jest',

    // The root directory that Jest should scan for tests and modules within
    // rootDir: undefined,

    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>'],

    // The test environment that will be used for testing
    testEnvironment: 'node',
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '<rootDir>/__tests__/**/*.test.ts',
    ],

    transform: {
        '^.+\\.(ts|js)?$': 'ts-jest',
    },

};

export default config;
