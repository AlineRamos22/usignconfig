module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    jsxBracketSameLine: true,
    arrowParens: 'always',
    endOfLine: 'auto',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.md',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
