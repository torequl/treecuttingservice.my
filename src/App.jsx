import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import TreeCutting from './pages/TreeCutting.jsx';
import TreeRemoval from './pages/TreeRemoval.jsx';
import GrassCutting from './pages/GrassCutting.jsx';
import TreePlanting from './pages/TreePlanting.jsx';
import StumpGrinding from './pages/StumpGrinding.jsx';
import Landscaping from './pages/Landscaping.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tree-cutting" element={<TreeCutting />} />
          <Route path="/tree-removal" element={<TreeRemoval />} />
          <Route path="/grass-cutting" element={<GrassCutting />} />
          <Route path="/tree-planting" element={<TreePlanting />} />
          <Route path="/stump-grinding" element={<StumpGrinding />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
