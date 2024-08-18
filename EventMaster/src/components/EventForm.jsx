// src/components/EventForm.js
import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react';

const EventForm = ({ onSubmit, event }) => {
    const [formData, setFormData] = useState({
        name: event?.name || '',
        date: event?.date || '',
        time: event?.time || '',
        location: event?.location || '',
        description: event?.description || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box as="form" onSubmit={handleSubmit} p={5} borderWidth="1px" borderRadius="lg" mb={4}>
            <FormControl mb={3}>
                <FormLabel>Event Name</FormLabel>
                <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
            </FormControl>
            <FormControl mb={3}>
                <FormLabel>Date</FormLabel>
                <Input 
                    name="date" 
                    type="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                />
            </FormControl>
            <FormControl mb={3}>
                <FormLabel>Time</FormLabel>
                <Input 
                    name="time" 
                    type="time" 
                    value={formData.time} 
                    onChange={handleChange} 
                    required 
                />
            </FormControl>
            <FormControl mb={3}>
                <FormLabel>Location</FormLabel>
                <Input 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                />
            </FormControl>
            <FormControl mb={3}>
                <FormLabel>Description</FormLabel>
                <Textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                />
            </FormControl>
            <Button type="submit" colorScheme="teal">
                {event ? 'Update Event' : 'Create Event'}
            </Button>
        </Box>
    );
};

export default EventForm;
