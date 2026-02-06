// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {
                tsconfig: './tsconfig.json',
            },
        },
    ],
};

export {};
