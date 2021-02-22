module.exports = {
    parser: 'babel-eslint',
    env: {
        commonjs: true,
        browser: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'comma-dangle': 0,
        'prettier/prettier': 'error',
        'react/jsx-uses-vars': 1,
        'react/display-name': 1,
        'no-param-reassign': 'off',
        'react/jsx-fragments': 'off',
        'class-methods-use-this': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-console': 0,
        'no-unexpected-multiline': 'warn',
        'react/prop-types': [0, { ignore: [], customValidators: [] }],
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
        'no-fallthrough': ['error', { commentPattern: 'break[\\s\\w]*omitted' }],
        'no-useless-constructor': 0,
        'no-shadow': 'off',
    },
};