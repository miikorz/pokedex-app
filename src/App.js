import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import List from "./views/list";
import Detail from "./views/detail"

const App = () => {
  return (
    <div>
      <h1>Welcome to pokedex!</h1>
      <Routes>
        <Route path="" element={<Navigate to="/pokemon" />} />
        <Route path="pokemon" element={<List />} />
        <Route path="pokemon/:pokemonName" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
