Change config for ssr:

- in /config/paths.js - add serverJs - path to server index file
- in /config/webpack.config.js - isServer = process.argv.includes('--server');
