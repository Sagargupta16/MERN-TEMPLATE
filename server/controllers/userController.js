import User from '../models/User.js';
import logger from '../utils/logger.js';

export const viewAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ errors: ['Internal server error'] });
  }
};

export const viewSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ errors: ['User not found'] });
    res.json(user);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ errors: ['Internal server error'] });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
    if (!user) return res.status(404).json({ errors: ['User not found'] });
    res.json(user);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ errors: ['Internal server error'] });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ errors: ['User not found'] });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ errors: ['Internal server error'] });
  }
};
