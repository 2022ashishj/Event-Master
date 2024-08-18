import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5001/',
});

export const fetchEvents = () => api.get('/events');
export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (name, email, password) => api.post('/auth/register', { name, email, password });
export const createEvent = (eventDetails) => api.post('/events', eventDetails);
export const submitFeedback = (eventId, feedback) => api.post(`/feedback/${eventId}`, feedback);
