/**
 * Define application routes.
 */

import express from 'express';
import {path} from '../config';
import resources from './resources';
import api from './api';

function routes (app) {
    'use strict';

    resources(app);
    api(app);

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function (req, res) {
            res.sendFile(process.cwd() + path.root + '/index.html');
        });
}

export default routes;
