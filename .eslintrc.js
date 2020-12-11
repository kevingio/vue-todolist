module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: [
      "warn", 2, { SwitchCase: 1 }
    ],
    quotes: ["warn", "single"],
    semi: ["warn", "always"],
    "no-trailing-spaces": ["warn"],
    "eol-last": ["warn"],
    "comma-dangle": ["warn", "never"],
    "vue/html-indent": ["warn", 2],
    "brace-style": ["warn", "1tbs"],
    "arrow-spacing": [
      "warn",
      {
        before: true,
        after: true
      }
    ],
    "space-before-blocks": ["warn", "always"],
    "keyword-spacing": [
      "warn",
      {
        before: true,
        after: true
      }
    ]
  }
};
