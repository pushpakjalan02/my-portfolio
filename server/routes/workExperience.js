const express = require('express');
const router = express.Router();
const {
  getAllWorkExperience
} = require('../controllers/workExperienceController');

router.get('/', getAllWorkExperience);

module.exports = router;