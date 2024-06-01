import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['.svelte-kit/', 'build/', 'dist/', '**/*.{md}'],
  },

  {
    plugins: {
      import: pluginImport,
    },
  },

  ...ts.configs.recommended,
  ...pluginSvelte.configs['flat/recommended'],

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Enforce consistent usage of type imports
      '@typescript-eslint/consistent-type-imports': 'error',

      // Ensure the `type` keyword is always outside the import braces
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

      // Enforce consistent import order
      'import/order': [
        'error',
        {
          'alphabetize': {
            caseInsensitive: true,
            order: 'asc',
          },
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          'pathGroups': [
            {
              pattern: '{.,..}/types',
              group: 'object',
              position: 'after',
            },
            {
              pattern: '*.{jpg,jpeg,gif,png,svg}',
              group: 'object',
              patternOptions: {
                matchBase: true,
              },
              position: 'after',
            },
            {
              pattern: '*.{css,scss}',
              group: 'object',
              patternOptions: {
                matchBase: true,
              },
              position: 'after',
            },
          ],
          'newlines-between': 'never',
        },
      ],
    },
  },

  configPrettier,
  ...pluginSvelte.configs['flat/prettier'],

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },

  pluginPrettier,
];
