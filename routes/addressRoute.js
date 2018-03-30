'use strict';
const router = require('express').Router();
const ordersService = require('../services/addressService');

router.post('/', async function (req, res, next) {
    const user = req.user;
    try {
        let result = await addressService.getAll();
        return res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;