module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "jest": true,
    },
    "rules": {
        // .jsx is legacy according to 
        // https://github.com/facebook/create-react-app/issues/3052
        "react/jsx-filename-extension": false,
    }
};