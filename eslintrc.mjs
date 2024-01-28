export default {
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};