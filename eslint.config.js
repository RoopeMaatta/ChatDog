import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

// 1) Import the TypeScript packages
import typescriptParser from '@typescript-eslint/parser'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      'eslint.config.js', 
      'vite.config.js', 
    ],
  },
  {
    
    files: ['**/*.{js,jsx,ts,tsx}'],

   
    languageOptions: {
      parser: typescriptParser, 
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: { version: 'detect' },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      '@typescript-eslint': typescriptEslintPlugin,
    },

    
    rules: {
      // Built-in JS recommended
      ...js.configs.recommended.rules,

      // React recommended
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // TypeScript recommended
      ...typescriptEslintPlugin.configs.recommended.rules,

      // Example rule overrides:
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Prettier integration: show Prettier formatting issues as errors
      'prettier/prettier': 'error',
      ...eslintConfigPrettier.rules, // disables any conflicting rules

      // Example TS-specific rule
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
]
