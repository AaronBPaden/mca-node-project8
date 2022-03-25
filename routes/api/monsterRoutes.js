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

monsters.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fetch(`${API}/${id}`)
        .then(res => res.json())
        .then(data => {
            res.render('pages/single-monster', {
                title: data.name,
                name: data.name,
                data
            });
        });
});

export default monsters;
