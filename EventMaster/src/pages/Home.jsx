import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../services/api';
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';


const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
      fetchEvents()
          .then((response) => {
              setEvents(response.data);
          })
          .catch((error) => {
              console.error("Error fetching events:", error);
          });
  }, []);

  return (
      <Box p={5}>
          <Heading mb={4}>Upcoming Events</Heading>
          <UnorderedList spacing={3}>
              {events.map((event) => (
                  <ListItem key={event.id} p={3} borderWidth="1px" borderRadius="md">
                      {event.name}
                  </ListItem>
              ))}
          </UnorderedList>
      </Box>
  );
};

export default Home;
