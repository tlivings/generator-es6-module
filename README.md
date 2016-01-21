# Module Generator

Yeoman generator for es6 modules.

Supports:

- `es6` using babel6
    - including `async/await` with `babel-regenerator-runtime`
- linting using `eslint`
- tests using `tape`

Requires:

- Node.js version 4+ (only supports ES2015 features missing from V4+)

### Install

```shell
npm install -g yo
npm install -g generator-es6-module
```

### Usage

```
mkdir somedir && cd $_
yo es6-module
```
