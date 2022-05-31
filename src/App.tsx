import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Clock = lazy(() => import('./pages/Clock/Clock'));
const SampleUseMemo = lazy(() => import('./pages/SampleUseMemo/SampleUseMemo'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/sampleusememo" element={<SampleUseMemo />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
