module.exports = {
  root: true,
  extends: [
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended",
  ],
  env: { jest: true, browser: true, node: true, es6: true },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // ####################
    // default eslint rules
    // ####################
    "max-len": [2, { code: 100, ignoreComments: true }],
    "no-alert": 2,
    "no-useless-constructor": 2,
    "no-console": [2, { allow: ["info", "warning", "error"] }],
    "prefer-template": 2,
    // ###################
    // eslint-plugin-react
    // ###################
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/no-unescaped-entities": 0,
    // ####################
    // eslint-plugin-import
    // ####################
    "import/namespace": 0,
    "import/no-unused-modules": 2,
    "import/no-unresolved": 0,
    "import/named": 0,
    "import/order": 1,
    // #####################
    // eslint-plugin-sonarjs
    // #####################
    "sonarjs/no-duplicate-string": 0,
    "sonarjs/no-small-switch": 0,
    "sonarjs/cognitive-complexity": 1,
    "sonarjs/no-inverted-boolean-check": 2,
    // #########################
    // eslint-plugin-react-hooks
    // #########################
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
  },
  plugins: ["prettier", "react-hooks", "jsx-a11y"],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
