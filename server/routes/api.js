/**
 * Main application routes.
 */
import express from 'express';
import {path} from '../config';

function api (app) {
    app.route('/api/login')
        .get(function (req, res) {
            // Do login stuff.
        });
};

export default api;
