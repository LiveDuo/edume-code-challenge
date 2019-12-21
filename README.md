## OVERVIEW

Frontend: React.js and Redux with @testing-library, eslint and create-react-app
Backend: Node.js and express with @babel, eslint, jest, supertest and node-cache


## SETUP

To run the frontend in development:
```
cd frontend
npm start
npm test

```

To run the backend in development:
```
cd backend
npm start
npm test

```



## NOTES

##### Babel and Eslint

Both frontend and backend were configure with babel and eslint for better code consistency and access to the latest JS features. The eslint config is not very strict and should be further configured.

##### Create-react-app

The project was setup with create-react-app as no further configuration was needed at this point for either babel or webpack

##### Dependencies

The react-router-dom could have been sue to demostrated further a more complete and production ready project structure. Libraries like babel and styled-components were deliberately avoided to demostrate the ability to work without these helper libraries and keep the project clean.

##### Security

Only boilerplate security was used with helment as express middleware. Further improvements can be made to secure the backend. For example there can be a DOS attack if a relatively long input is provided to the T9 endpoint.

#### T9

Words that start with the current prediction but have been fully typed yet, are not currently shown. For example 27753 returns the word "apple" but 277 does not return "apple". The endpoint can be altered to work as such if required.