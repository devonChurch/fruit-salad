const esLint = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'airbnb',
  ],

  env: {
    browser: true,
    es6: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['prettier', 'import', 'react', 'flowtype', 'jsx-a11y'],

  rules: {
    'prettier/prettier': 'error',

    // Default is only .jsx files but I have added in generic .js into the
    // acceptable extension list to remove the cognitive load of differentiating
    // file types.
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],

    // I am emulating the “object-curly-spacing” rule where we introduce spacing
    // around curly brace content. Its also helps ease eye strain.
    'react/jsx-curly-spacing': ['warn', 'always'],
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};

module.exports = esLint;
