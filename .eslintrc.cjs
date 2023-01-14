/** @type {import('eslint').Linter.Config} */
module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": false,
    },
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/consistent-type-imports": "off"
  }
};
