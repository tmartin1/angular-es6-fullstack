/**
 * Component and resource routes.
 */
import express from 'express';
import {path} from '../config';

function resources (app) {
    app.route('/bower_components/*')
        .get(function (req, res) {
            res.sendFile(process.cwd() + req.path);
        });

    app.route('/assets/*')
        .get(function (req, res) {
            res.sendFile(process.cwd() + path.partials + req.path);
        });

    app.route('/app/*')
        .get(function (req, res) {
            if (req.path.match('app/index.')) {
                res.sendFile(process.cwd() + path.root + req.path);
            } else {
                res.sendFile(process.cwd() + path.partials + req.path);
            }
        });
};

export default resources;
