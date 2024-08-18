// frontend/src/pages/DashboardPage.js
import React, { useContext, useEffect } from 'react';
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { EventContext } from '../context/EventContext';

const DashboardPage = () => {
    const { events, fetchEvents } = useContext(EventContext);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const totalEvents = events.length;
    const totalParticipants = events.reduce((acc, event) => acc + event.participants.length, 0);

    return (
        <Box p={5}>
            <Text fontSize="2xl" mb={4}>Dashboard</Text>
            <SimpleGrid columns={[1, 2, 2]} spacing={5}>
                <Stat>
                    <StatLabel>Total Events</StatLabel>
                    <StatNumber>{totalEvents}</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel>Total Participants</StatLabel>
                    <StatNumber>{totalParticipants}</StatNumber>
                </Stat>
            </SimpleGrid>
        </Box>
    );
};

export default DashboardPage;
