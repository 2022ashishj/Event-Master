// src/components/Dashboard.js
import { Box, Heading, Stat, StatLabel, StatNumber, SimpleGrid } from '@chakra-ui/react';

const Dashboard = ({ stats }) => {
    return (
        <Box p={5}>
            <Heading mb={4}>Event Dashboard</Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing="20px">
                <Stat>
                    <StatLabel>Total Participants</StatLabel>
                    <StatNumber>{stats.totalParticipants}</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel>Upcoming Events</StatLabel>
                    <StatNumber>{stats.upcomingEvents}</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel>Feedbacks Received</StatLabel>
                    <StatNumber>{stats.feedbackCount}</StatNumber>
                </Stat>
            </SimpleGrid>
        </Box>
    );
};

export default Dashboard;
