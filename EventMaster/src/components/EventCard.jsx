// src/components/EventCard.js
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export const EventCard = ({ event, onRegister }) => {
    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            p={5} 
            mb={4}
        >
            <Heading fontSize="xl" mb={2}>{event.name}</Heading>
            <Text>Date: {event.date}</Text>
            <Text>Time: {event.time}</Text>
            <Text>Location: {event.location}</Text>
            <Text mt={2}>{event.description}</Text>
            <Button 
                mt={4} 
                colorScheme="teal" 
                onClick={() => onRegister(event.id)}
            >
                Register
            </Button>
        </Box>
    );
};

// export default EventCard;
