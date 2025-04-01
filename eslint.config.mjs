import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import js from '@eslint/js';
import babelEslintParser from '@babel/eslint-parser';

export default [
  {
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false, // Disable config file check for Babel
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly', // Optional custom global
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'no-cond-assign': 'off',
      'no-prototype-builtins': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['*.js', '*.jsx'],
    ...js.configs.recommended, // ESLint recommended configuration
  },
];
