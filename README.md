# GraphiQL Application

GraphiQL is a playground/IDE for graphQL requests.

This application is the final task of the course on [React](https://github.com/rolling-scopes-school/tasks/tree/master/react) in [RS School](https://rs.school/).

Developers who worked on the application: [AnnaFeona](https://github.com/AnnaFeona), [Smetan-dot](https://github.com/Smetan-dot) and [MilaSem](https://github.com/MilaSem).

## Application structure

GraphiQL is an open-source tool, but for training purposes, the applicaton implements authorization and authentication.

App structure:

1. Welcome page
2. User auth
3. GraphiQL page with:

- request editor
- variables editor
- headers editor
- documentation explorer
- response section
- possiblity to change to a different user-specified API endpoint

## Technology Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Getting Started

1. Install [Node.js](https://nodejs.org/en/download)
2. Clone [repository](https://github.com/MilaSem/graphiql-app.git)
3. Go to the cloned project folder `cd ./graphiql-app`
4. Install all dependencies `npm install`
5. Use scripts to work with the propject

## Scripts

- `dev` - this command starts the Vite server in development mode
- `lint` - this command starts ESLint
- `format:fix` - this command formats all files in the src directory
- `test` - this command starts Jest's tests
