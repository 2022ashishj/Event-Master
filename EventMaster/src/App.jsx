// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EventDetails from './pages/EventDetails';
import DashboardPage from './pages/DashboardPage';
import { EventProvider } from './context/EventContext'; // Import EventProvider

function App() {
    return (
        <ChakraProvider>
            <EventProvider> {/* Wrap your components with EventProvider */}
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/event/:id" element={<EventDetails />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                    </Routes>
                </Router>
            </EventProvider>
        </ChakraProvider>
    );
}

export default App;
