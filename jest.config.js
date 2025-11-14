/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',    
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true, 
                tsconfig: 'tsconfig.json',
            },
        ],
    },    
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },    
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],    
    testMatch: [
        "**/tests/**/*.ts",
        "**/?(*.)+(spec|test).ts"
    ],
};    
