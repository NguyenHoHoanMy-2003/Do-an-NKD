const express = require('express');
const path = require('path');
const router = express.Router();

// Route cho trang index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..','a.index.html'));
});

// Route cho trang home.html
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..','a.Home.html'));
});

// Route cho trang details.html
router.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, '..','a.Details.html'));
});

// Route cho trang alerts.html
router.get('/alerts', (req, res) => {
    res.sendFile(path.join(__dirname, '..','a.Alerts.html'));
});

module.exports = router;
