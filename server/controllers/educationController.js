const Education = require('../models/Education');

exports.getAllEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1, year: -1, endYear: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
