// src/components/RegistrationForm.js
import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const RegistrationForm = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name });
    };

    return (
        <Box as="form" onSubmit={handleSubmit} p={5} borderWidth="1px" borderRadius="lg">
            <FormControl mb={3}>
                <FormLabel>Your Name</FormLabel>
                <Input 
                    name="name" 
                    value={name} 
                    onChange={handleChange} 
                    placeholder="Enter your name" 
                    required 
                />
            </FormControl>
            <Button type="submit" colorScheme="teal">
                Register
            </Button>
        </Box>
    );
};

export default RegistrationForm;
