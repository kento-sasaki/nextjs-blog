module.exports = {
  extends: ["eslint:recommended", "next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:import/recommended", "plugin:import/typescript", "prettier", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': ['error', {
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc'
      }
    }],
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-curly-brace-presence': 'error',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/ban-types': ['error', {
      types: {
        '{}': false
      }
    }],
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }]
  }
};