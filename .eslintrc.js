module.exports = {
    root: true,        
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'semi': ["error", "never"],
        'arrow-parens': ["error", "as-needed"],
        'import/no-unresolved': 'off',
        "no-restricted-globals": ["error", "event", "fdescribe"],
        "no-unused-vars": 'off',
        "react/prop-types": 'off',
        "no-underscore-dangle": 'off',
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};