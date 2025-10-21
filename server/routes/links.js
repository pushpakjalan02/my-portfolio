const express = require('express');
const router = express.Router();
const {
  getAllLinks
} = require('../controllers/linkController');

router.get('/', getAllLinks);

module.exports = router;