const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const authMiddleware = require('../middleware/authMiddleware');

// Register for an event (User)
router.post(
  '/',
  authMiddleware,
  registrationController.registerForEvent
);

// Cancel registration for an event (User)
router.delete(
  '/',
  authMiddleware,
  registrationController.cancelRegistration
);

module.exports = router;
