#### add baseUrl --> src

#### add prettier --> https://prettier.io/docs/en/install.html

1. add .prettierrc.json and .prettierignore
2. pre commit hook --> lint-staged ---> npx mrm lint-staged
3. install eslint-config-prettier to make ESLint and Prettier play nice with each other

```
  "eslintConfig": {
    "extends": [
      "react-app",
      "prettier"
    ]
  },
```

#### add commitlint --> https://github.com/conventional-changelog/commitlint#getting-started

follow get started
