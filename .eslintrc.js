module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    DEVELOPMENT: true,
  },
  extends: 'airbnb-base',
  'rules': {
    'linebreak-style': 0,
    'comma-dangle': 0,
    'import/no-extraneous-dependencies' : 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'max-len': 0,
    "func-names": 0,
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": 0,
    "no-trailing-spaces": 0,
    "camelcase": 0,
    "no-return-assign": 0,
    "key-spacing": 0,
    "padded-blocks": 0,
    "no-unneeded-ternary": 0,
    "no-underscore-dangle": 0,
    "quotes": 0,
    "no-prototype-builtins": 0,
    "no-restricted-syntax": 0,
    "prefer-template": 0, // for dynamic require in icon component
    "no-unused-expressions": 0, // for a ? b() : c()
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 3, "maxEOF": 1 }],
    "import/imports-first": 0,
    "new-cap": 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
