const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Create a new event (Admin)
router.post(
  '/',
  authMiddleware,
  roleMiddleware('admin'),
  eventController.createEvent
);

// Get all events
router.get('/', eventController.getEvents);

// Get a single event by ID
router.get('/:id', eventController.getEventById);

// Update event details (Admin)
router.put(
  '/:id',
  authMiddleware,
  roleMiddleware('admin'),
  eventController.updateEvent
);

// Delete an event (Admin)
router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware('admin'),
  eventController.deleteEvent
);

module.exports = router;
