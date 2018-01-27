System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "module/": "app/modules/",
    "vendor/": "vendor/",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "angular": "vendor/angular.js",
    "angular-ui-router": "vendor/angular-ui-router.js",
    "app": "app/app.module.js",
    "plugin-babel": "vendor/plugin-babel.js",
    "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
    "systemjs-babel-build": "vendor/systemjs-babel-browser.js",
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
