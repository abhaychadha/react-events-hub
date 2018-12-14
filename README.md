**Events Hub**

**About the application**

The application allows the user to select a band from a list and see the scheduled events by that band in coming months and the venues for them. User can also navigate to their social profiles and bio links.

(Free text search is not allowed as bandsintown API doesn&#39;t return a response for bad search strings)

**How to start**

Node and npm is needed to run the application. On cmd run &#39;npm install&#39; command to install the npm modules. Once done run &#39;npm run start&#39; to run the application

**Application Architecture**

The application is built using **React** and **ES6.** For state management **Redux** is being used with **thunk** as the middleware. **Material-UI** is being used for styling. **Enzyme** and **jest** is being used for unit testing

The components are a part of two directories: **containers** and **components**

All the stateful components and components connected with redux store are the part of containers directory and the stateless components are contained in components directory

Common application styles are part of the **styles** directory and can be injected in the components using withStyles utility

**Utils** directory is created to store common configurations and methods which are being used across the application. ** Utility.js** contains the common methods **, services.js** contains the API endpoints and **api-wrapper.js** is the proxy module for making api calls and massaging the responses in a common format across the application

**Static** directory contains the static assets used in the application
