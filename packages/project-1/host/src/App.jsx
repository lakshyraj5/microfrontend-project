import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './components/Contact';
import RemoteAbout from 'remoteApp/About'; // Import the remote About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<RemoteAbout />} /> {/* Route for remote About component */}
      </Routes>
    </Router>
  );
}

export default App;