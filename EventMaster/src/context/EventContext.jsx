import React, { createContext, useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { fetchEvents, createEvent } from '../services/api';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const { data } = await fetchEvents();
                setEvents(data.events);
            } catch (error) {
                toast({
                    title: "Failed to load events",
                    description: error.response?.data?.message || error.message,
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        };
        loadEvents();
    }, [toast]);

    const handleCreateEvent = async (eventDetails) => {
        try {
            const { data } = await createEvent(eventDetails);
            setEvents((prevEvents) => [...prevEvents, data.event]);
            toast({
                title: "Event created successfully",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Failed to create event",
                description: error.response?.data?.message || error.message,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <EventContext.Provider value={{ events, handleCreateEvent, loading }}>
            {children}
        </EventContext.Provider>
    );
};
