const getTrainingModules = (req, res) => {
  res.json({ message: 'List of training modules' });
};

module.exports = {
  getTrainingModules,
};
