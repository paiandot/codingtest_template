#!/usr/bin/env bash
# babel
npm init -y
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/plugin-proposal-class-properties
echo "install babel done"

#webpack
npm install --save-dev webpack webpack-cli
npm install --save-dev babel-loader
npm install @babel/polyfill
echo "install webpack done"