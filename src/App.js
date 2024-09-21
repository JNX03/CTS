import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Map from './components/Map';
import Settings from './components/Settings';

function App() {
  return (
    <div style={styles.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'relative',
  },
};

export default App;
