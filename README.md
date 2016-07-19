[![Build Status](https://travis-ci.org/sfabrizio/rooty.svg?branch=master)](https://travis-ci.org/sfabrizio/rooty)
[![bitHound Overall Score](https://www.bithound.io/github/sfabrizio/rooty/badges/score.svg)](https://www.bithound.io/github/sfabrizio/rooty)
[![bitHound Dependencies](https://www.bithound.io/github/sfabrizio/rooty/badges/dependencies.svg)](https://www.bithound.io/github/sfabrizio/rooty/master/dependencies/npm)

# Rooty

A Tiny user management system written in Vanilla JS on ES6


## Install 

```
npm install
```

## Run dev server with hot reloading

```
npm run dev
```

## TODO (This is a work in progress)

- Finish the basic app functionality: assign groups & deletion
- Add form validations.
- Add unit tests with Jasmine
- build of SASS file & migrate existing CSS
- Create login functionality 
- Add more offline features 
- Add search functionality  
- Write a simple backend in Node + Express + MongoDB


> **Note:** 
> This is only the FrontEnd part. I'm using mockup data at the moment. But these are the endpoints expected to have on the Backend:

- `/users` with methods [GET,POST, PUT & DELETE]
- `/groups` with methods [GET,POST, PUT & DELETE]
- `/login` with method [POST]
