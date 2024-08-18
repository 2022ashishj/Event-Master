const Registration = require('../models/Registration');
const Event = require('../models/Event');

// Register for an event (User)
exports.registerForEvent = async (req, res) => {
  const { eventId } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const registration = new Registration({
      userId: req.user.id,
      eventId: event._id,
    });

    if (event.participantLimit > 0 && event.waitlist.length < event.participantLimit) {
      event.waitlist.push(req.user.id);
      await event.save();
    } else {
      registration.waitlist = true;
    }

    await registration.save();
    res.status(201).json({ message: 'Registered successfully', registration });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Cancel registration for an event (User)
exports.cancelRegistration = async (req, res) => {
  const { eventId } = req.body;

  try {
    const registration = await Registration.findOneAndRemove({ userId: req.user.id, eventId });
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    const event = await Event.findById(eventId);
    event.waitlist = event.waitlist.filter(id => id !== req.user.id);
    await event.save();

    res.status(200).json({ message: 'Registration cancelled' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
