const skill = require('../models/Skill');

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await skill.find().sort({ order: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
