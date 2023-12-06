import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';

const contentful = require("contentful");

export const client = contentful.createClient({
  space: 'hxjsopr47f67',
  accessToken: '-Og0DEAZZ6wmbb-6HRpKjnvPZc03sTWoALnwbpllF0Y'
})

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news/:newsId" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
