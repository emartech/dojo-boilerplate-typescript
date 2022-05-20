'use strict';

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  runner: 'jest-runner',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
};