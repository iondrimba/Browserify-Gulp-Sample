# Browserify + Gulp Project

[![Travis build status](https://travis-ci.org/iondrimba/browserify-gulp-sample.svg?branch=master)](https://travis-ci.org/iondrimba/browserify-gulp-sample) [![Build status](https://ci.appveyor.com/api/projects/status/5fxsk1vlkea7fp0h?svg=true)](https://ci.appveyor.com/project/iondrimba/browserify-gulp-sample)

### Goal:

	Provide a simple compact fast to setup project CommonJs ready.


### Requires:

	* NodeJS
	* Gulp

### Installation

```sh
$ git clone https://github.com/iondrimba/browserify-gulp-sample.git
$ cd browserify-gulp-sample
$ npm install

$ gulp
```

__Includes:__

  * BrowserSync
  * Browserify (CommonJS)
  * Scss (Sass)
  * ESLint
  * Scss Lint (Requires Ruby and [scss-lint])
  * Imagemin (images optimization)
  * Uglify

__Structure:__

````bash
├── public
│    ├─── scripts/
│    ├─── styles/
│    └─── index.html
│    
│── src
│    ├── images/
│    ├── scripts/
│    └── scss/
│
├── tasks
│   ├── browser-sync.js
│   ├── browserify.js
│   ├── eslint.js
│   ├── imagemin.js
│   ├── sass.js
│   ├── scss-lint.js
│   ├── uglify.js
│   └── watch.js
│
│── .gitignore
│── .travis.yml
│── gulpfile.js
└── package.json
````

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
