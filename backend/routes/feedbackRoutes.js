const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Submit feedback for an event (User)
router.post(
  '/',
  authMiddleware,
  feedbackController.submitFeedback
);

// Get feedback for a specific event (Admin)
router.get(
  '/:id',
  authMiddleware,
  roleMiddleware('admin'),
  feedbackController.getEventFeedback
);

module.exports = router;
