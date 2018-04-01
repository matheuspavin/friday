'use strict';
const router = require('express').Router();
const addressService = require('../services/addressService');

router.post('/', async function (req, res, next) {
    var address = req.body;
    try {
        let result = await addressService.setAddress(address.address);
        return res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;