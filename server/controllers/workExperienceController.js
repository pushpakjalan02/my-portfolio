const WorkExperience = require('../models/WorkExperience');

exports.getAllWorkExperience = async (req, res) => {
  try {
    const experiences = await WorkExperience.find().sort({ order: 1, startDate: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
