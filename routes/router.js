"use strict";
import express from 'express';
import monsters from './api/monsterRoutes.js';
const router = express.Router();

router.use(express.static('public'));
router.use('/monsters', monsters);

router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Monster Sanctuary Example',
        name: 'Monster Sanctuary',
    });
});

router.get('*', (req, res) => {
    switch(req.url) {
        case '/favicon.ico':
            res.end();
            break;
        default:
            res.status(404).render('pages/404', {
                title: '404 Error',
                name: '404 Error',
            });
    }
});

export default router;
