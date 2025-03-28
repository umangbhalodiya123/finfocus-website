/* eslint-disable import/no-anonymous-default-export */
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'

import tsParser from '@typescript-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname, // Ensure this is correct
})

export default [
  ...compat.extends('next', 'next/core-web-vitals', 'prettier'), // Fixes `compat is not defined`
  {
    plugins: {
      react,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      semi: ['error', 'never'],
      'prefer-const': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/no-unescaped-entities': 'off', // Allow unescaped ' and "
      'next/next/no-img-element': 'off', // Allow <img> usage
    },
  },
]
