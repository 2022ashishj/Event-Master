// frontend/src/pages/Login.js
import React, { useState, useContext } from 'react';
import { Box, Button, Input, VStack, FormControl, FormLabel, Alert, AlertIcon } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { login, error } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({ email, password });
    };

    return (
        <Box w="400px" mx="auto" mt="100px">
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="teal" width="full">
                        Login
                    </Button>
                </VStack>
            </form>
            {error && (
                <Alert status="error" mt={4}>
                    <AlertIcon />
                    {error}
                </Alert>
            )}
        </Box>
    );
};

export default Login;
