import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Data from './pages/Data';
import Visuals from './pages/Visuals';
import System from './pages/System';
import Connect from './pages/Connect';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="/system" element={<System />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
