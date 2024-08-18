// src/components/Notification.js
import { Box, Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

const Notification = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <Box mb={4}>
            <Alert status="info">
                <AlertIcon />
                <AlertTitle>{message}</AlertTitle>
                <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
            </Alert>
        </Box>
    );
};

export default Notification;
