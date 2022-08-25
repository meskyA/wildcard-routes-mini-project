const express = require('express');
const feedback = require('feedback');
const tips = require('tips');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route
const diagnosticsRouter = require('./diagnostic');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route
app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
