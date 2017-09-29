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

    // // I have been having conflicts between "prettier" removing bracket wrapped
    // // arrows e.g. () => (foo - bar ? baz : zap) and then ESLint complaining. In
    // // that regard I am going to mute this formatting query.
    // 'no-confusing-arrow': 'off',

    'arrow-parens': 'off',

    // Default is only .jsx files but I have added in generic .js into the
    // acceptable extension list to remove the cognitive load of differentiating
    // file types.
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};

module.exports = esLint;
