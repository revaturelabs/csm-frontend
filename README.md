# csm-frontend
- Frontend for Caliber Staging Module
- Built with React and Redux

## Getting Started
1. To get started run `npm install` to install dependencies and make sure port 3000 is available
2. Run `npm start` to start the application
3. To boot up the backend, check out [csm-backend](https://github.com/revaturelabs/csm-backend)

## File Structure Guide
------
```
 src
 └───styles
 │  │
 │  └───variables.scss          // Global styling variables
 │  │ 
 │  └───mixins.scss             // Styling functions boilerplate
 │
 └───components 
 │  │
 │  └───Component1
 │  │   └───Component1.js       // React component
 │  │   │
 │  │   └───Component1.css      // Associated styling (optionally .scss)
 │  │   ...
 │  └───Component2
 │  │   └───Component2.js
 │  │   │
 │  │   └───Component2.css
 │  ...
 │
 └───reducers 
 │  │
 │  └───index.js                // Combined root reducer 
 │  │   
 │  └───reducer1.js             // Contained reducer chunks 
 │  │   
 │  └───reducer2.js
 │  ...
 │
 └───services
 │  │
 │  └───service1.service.js     // Contained service
 │  │   
 │  └───service2.service.js
 │  ...
 ...
```   