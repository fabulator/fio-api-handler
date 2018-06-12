module.exports = {
    extends: [
        '@socifi',
    ],
    settings: {
        polyfills: [
            'fetch',
            'promises',
        ],
    },
    rules: {
        'flowtype/no-flow-fix-me-comments': 1,
    },
};
