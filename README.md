# Typescript + React starter kit

A little starter project for Typescript and React

Based on instructions at
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

# Global set up
    
    npm install --global typescript@beta typings webpack webpack-dev-server ts-loader source-map-loader colors

# Build

    npm install
    npm link typescript webpack webpack-dev-server ts-loader source-map-loader colors
    typings install
    webpack

# Dev

    webpack-dev-server --content-base public --inline --hot

# typings

    typings install --global --save dt~lodash