# Module Generator

Yeoman generator for es6 modules.

Supports:

- `es6` using babel6
    - including `async/await` with `babel-regenerator-runtime`
- linting using `eslint`
- tests using `tape`

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

### async/await

If you wish to use `await`, you will need to manually include the following line in the file using it:

```javascript
var regeneratorRuntime = require('babel-regenerator-runtime');
```

This will allow `regeneratorRuntime` to resolve properly after compile.
