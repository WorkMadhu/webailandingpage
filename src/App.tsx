import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContentAutomationPage from './pages/ContentAutomationPage';
import OmnichannelOutreachPage from './pages/OmnichannelOutreachPage';
import HRAutomationsPage from './pages/HRAutomationsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-50 text-navy-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/content-automation" element={<ContentAutomationPage />} />
          <Route path="/omnichannel-outreach" element={<OmnichannelOutreachPage />} />
          <Route path="/hr-automations" element={<HRAutomationsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
