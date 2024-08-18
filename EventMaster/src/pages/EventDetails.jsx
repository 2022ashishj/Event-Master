// frontend/src/pages/EventDetails.js
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';
import { EventContext } from '../context/EventContext';

const EventDetails = () => {
    const { id } = useParams();
    const { event, fetchEventDetails, registerForEvent } = useContext(EventContext);

    useEffect(() => {
        fetchEventDetails(id);
    }, [id, fetchEventDetails]);

    if (!event) return <Text>Loading...</Text>;

    return (
        <Box p={5}>
            <Text fontSize="2xl" mb={4}>{event.name}</Text>
            <Text mb={4}>{event.description}</Text>
            <Text mb={4}>Date: {new Date(event.date).toLocaleDateString()}</Text>
            <Text mb={4}>Location: {event.location}</Text>
            <Button colorScheme="teal" onClick={() => registerForEvent(id)}>
                Register
            </Button>
        </Box>
    );
};

export default EventDetails;
