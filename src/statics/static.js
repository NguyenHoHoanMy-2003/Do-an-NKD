const path = require('path');
const express = require('express');

const STATIC = (app) => {
    app.use(express.static(path.join(__dirname, '..')));
    app.use('/css', express.static(path.join(__dirname, '..', 'css')));
    app.use('/js', express.static(path.join(__dirname, '..', 'js')));
}

module.exports = STATIC;
