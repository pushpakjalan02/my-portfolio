const About = require('../models/About');

exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about || { content: '' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
