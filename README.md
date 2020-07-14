# csm-frontend
- Frontend for Caliber Staging Module
- Built with React and Redux
- Styling globals placed in `index.css`

## File Structure Guide
------
```
 src
 │
 └───components 
 │  │
 │  └───Component1
 │  │   │   Component1.js       // React component
 │  │   │   Component1.css      // Associated styling (optionally .scss)
 │  │   
 │  └───Component2
 │      │   Component2.js
 │      │   Component2.css
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
 │  │   
 │  └───service3.service.js
 │  ...
 ...
```   