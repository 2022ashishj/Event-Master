const Event = require('../models/Event');

// Create a new event (Admin)
exports.createEvent = async (req, res) => {
  const { name, date, time, location, description, participantLimit } = req.body;

  try {
    const event = new Event({
      name,
      date,
      time,
      location,
      description,
      participantLimit,
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update event details (Admin)
exports.updateEvent = async (req, res) => {
  const { name, date, time, location, description, participantLimit } = req.body;

  try {
    let event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    event = await Event.findByIdAndUpdate(
      req.params.id,
      { name, date, time, location, description, participantLimit },
      { new: true }
    );

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an event (Admin)
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    await Event.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Event removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
