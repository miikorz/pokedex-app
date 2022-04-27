import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import List from './views/list';
import Detail from './views/detail';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/pokemon" />} />
      <Route path="pokemon" element={<List />} />
      <Route path="pokemon/:pokemonName" element={<Detail />} />
    </Routes>
  );
}

export default App;
