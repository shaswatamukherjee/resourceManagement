System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "babel",
    babelOptions: {
       "optional": [
           "runtime",
           "optimisation.modules.system"
       ]
    },
    paths: {
        "npm:": "node_modules/"
    },
    map: {

    }
});