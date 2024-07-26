import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Story from './component/Story';
import Signup from './component/Signup';
import Welcome from './component/Welcome';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CharacterDetails from './component/CharacterDetails';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="575109698177-lhtkiq25g6imju46epr6mkaa23er7d7e.apps.googleusercontent.com">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Story />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/character-details" element={<CharacterDetails />} /> {/* New route for character details */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
