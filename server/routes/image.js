const express = require('express');
const router = express.Router();
const controller = require('../controller/image.controller');
const config = require('../../config');

/* API endpoint */
router.get('/s3-signed-req', controller.getSignedRequest);
module.exports = router;