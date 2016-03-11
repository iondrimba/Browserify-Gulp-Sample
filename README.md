# Browserify + Gulp Project

[![Travis build status](https://travis-ci.org/iondrimba/Browserify-Gulp-Sample.svg?branch=master)](https://travis-ci.org/iondrimba/Browserify-Gulp-Sample)

### Goal:

	Provide a simple compact fast to setup project CommonJs ready.


### Requires:

	* NodeJS
	* Gulp

### Installation

```sh
$ git clone https://github.com/iondrimba/Browserify-Gulp-Sample.git
$ cd Browserify-Gulp-Sample
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
