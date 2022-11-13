import React from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';

import { Link, Routes, Route } from 'react-router-dom';

import ArchivePage from './pages/ArchivePage';

function App() {
  return (
    <div className="app-container">

      <header>
        <h1><Link to='/'>Aplikasi Catatan</Link></h1>
        <nav className='navigation'>
          <ul>
            <li><Link to="/archives">Arsip</Link></li>
          </ul>
        </nav>

      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
