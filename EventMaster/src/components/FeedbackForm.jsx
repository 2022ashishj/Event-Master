// src/components/FeedbackForm.js
import { useState } from 'react';
import { Box, FormControl, FormLabel, Textarea, Button } from '@chakra-ui/react';

const FeedbackForm = ({ onSubmit }) => {
    const [feedback, setFeedback] = useState('');

    const handleChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ feedback });
    };

    return (
        <Box as="form" onSubmit={handleSubmit} p={5} borderWidth="1px" borderRadius="lg">
            <FormControl mb={3}>
                <FormLabel>Feedback</FormLabel>
                <Textarea 
                    name="feedback" 
                    value={feedback} 
                    onChange={handleChange} 
                    placeholder="Share your experience" 
                    required 
                />
            </FormControl>
            <Button type="submit" colorScheme="teal">
                Submit Feedback
            </Button>
        </Box>
    );
};

export default FeedbackForm;
