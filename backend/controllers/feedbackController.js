const Feedback = require('../models/Feedback');

// Submit feedback for an event (User)
exports.submitFeedback = async (req, res) => {
  const { eventId, rating, comments } = req.body;

  try {
    const feedback = new Feedback({
      userId: req.user.id,
      eventId,
      rating,
      comments,
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get feedback for a specific event (Admin)
exports.getEventFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({ eventId: req.params.id });
    if (!feedback) {
      return res.status(404).json({ message: 'No feedback found for this event' });
    }

    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
