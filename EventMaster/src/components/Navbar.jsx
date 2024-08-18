// src/components/Navbar.js
import { Box, Flex, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('gray.100', 'gray.900');

    return (
        <Box bg={bg} px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box>Event Management</Box>
                <Flex alignItems="center">
                    <Button onClick={toggleColorMode} mr={4}>
                        {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </Button>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
