## Setup New JS Environment

### *Initial Configuration*
In the root of new project:

1. Add [.editorconfig](.editorconfig) boilerplate.  
2. Add [package.json](package.json) boilerplate.

---
### *Package Installation*

3. Run `npm install` to install all packages listed inside `package.json` to a new folder called `node_modules`.
```bash
$ npm install
```
4. Install the [Node Security Project](https://www.npmjs.com/package/nsp) by running `npm install -g nsp`. Then run `nsp check` to examine `package.json` packages for known vulnerabilities.
```bash
$ npm install -g nsp
$ nsp check
```

---
### *Development Web Server*

5. [Express](https://expressjs.com/) was installed during the `npm install` process, because it is listed in the `package.json` file. However, it still needs to be configured.
6. Create a new folder in the project root called `buildScripts`, which will contain all build-related tools. Then add a new file to this folder called [srcServer.js](srcServer.js). Note, `src` is short for source.
```bash
$ mkdir buildScripts
$ cd buildScripts
$ touch srcServer.js
```
```bash
|____project
|  |____buildScripts
|     |____srcServer.js
|  |____node_modules
|  |____package.json
|  |____.editorconfig
```
7. [srcServer.js](srcServer.js) will configure a web server that serves-up [index.html](index.html) from the `src` (source) directory, as shown below.
```bash
|____project
|  |____buildScripts
|     |____srcServer.js
|  |____node_modules
|  |____src
|     |____index.html
|  |____package.json
|  |____.editorconfig
```
8. To serve up the [index.html](index.html) page, run the following:
```bash
$ node buildScripts/srcServer.js
```
