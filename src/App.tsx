import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Forside from './pages/Forside';
import Autoruder from './pages/Autoruder';
import Stenslag from './pages/Stenslag';
import Solfilm from './pages/Solfilm';
import Kalibrering from './pages/Kalibrering';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white" style={{ backgroundColor: '#212529' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/autoruder" element={<Autoruder />} />
          <Route path="/stenslag" element={<Stenslag />} />
          <Route path="/solfilm" element={<Solfilm />} />
          <Route path="/kalibrering" element={<Kalibrering />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;