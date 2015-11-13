// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import express from 'express';
import {server} from './config';
import routes from './routes';

// Setup server
var app = express();

// Define routes
routes(app);

// Start server
app.listen(server.port, server.host, function (err) {
    if (err) {
        console.log('Error found at running time:', err);
    }

    console.log('Listening on', server.host + ':' + server.port);
});

// Expose app
export default app;
