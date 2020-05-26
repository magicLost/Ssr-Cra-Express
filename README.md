To change config for ssr - change /config/webpack.config.js and /scripts/

./src/server - express server

./src/ssrServer/staticSsr - pre-render pages templates

./src/ssrServer/dynamicSsr - functions for dynamic part of pages and then inject into static templates

!!!With material ui we can not do ssr render for parts of our page. Because in ui for custom classes names use some counter(example jss-1, jss-2) and when we render base part of page we get our classes make with jss with names jss-1, jss-2 etc. And when we will render another part of page we again starts for our custom jss classes with counter jss-1. And we can not avoid it.

!!!So we can delete material ui or use sass classes for material ui elements customization(in that case we can not use themes)
