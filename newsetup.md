## New JS Environment Setup

### *Initial Configuration*
From the project's root directory:

1. Add [.editorconfig](.editorconfig) boilerplate.  
2. Add [package.json](package.json) boilerplate.

---
### *Package Installation*

3. Run `npm install` to install all packages listed inside package.json to a new folder called `node_modules`.
```bash
$ npm install
```
4. Install the [Node Security Project](https://www.npmjs.com/package/nsp) by running `npm install -g nsp`. Then run `nsp check` to examine package.json packages for known vulnerabilities.
```bash
$ npm install -g nsp
$ nsp check
```

---
### *Install Development Web Server*

5. 
