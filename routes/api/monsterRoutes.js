"use strict";
import express from 'express';
import fetch from 'node-fetch';
const monsters = express.Router();

const API = 'https://api.sampleapis.com/monstersanctuary/monsters';

monsters.get('/', (req, res) => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            res.render('pages/monsters', {
                title: "Monster List",
                name: "Monsters",
                data
            });
        });
});

export default monsters;
