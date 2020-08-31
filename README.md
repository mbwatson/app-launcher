# App Launcher

This is the start of an App Launcher for HeLx, which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This app is intended to servce as a user interface for launching apps. See below for details on defining apps.

This documentation is minimal, as functionality requirements still need to be fleshed out.

## Config

Define array of apps as the default export from `./data/apps.js`.

```javascript
export default [
    {
        name: 'App One',
        logo: 'https://picsum.photos/200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        launchUrl: 'api/launch/app-one',
    },
    {
        name: 'App Two',
        logo: 'https://picsum.photos/201',
        description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        launchUrl: 'api/launch/app-two',
    },
    // ...
]
```

## Development

Executing 

```bash
$ npm start
```

will spin up a local development server on port 3000.

## Deployment

coming soon.