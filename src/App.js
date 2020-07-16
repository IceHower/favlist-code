import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [favs, setFavs] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(["teste 1", "teste 2", "teste 3"]);
  }, []);

  function adicionarFavorito(nome) {
    setLists(lists.filter(list => list !== nome));
    setFavs([...favs, nome]);
  }
  function removerFavorito(nome) {
    setFavs(favs.filter(fav => fav !== nome));
    setLists([...lists, nome]);
  }
  return (
    <div className="App">
      <h1>Teste de favoritos</h1>
      <h2> Lista normal </h2>
      <ul>
        {lists.map(list => (
          <li key={list}>
            {list}
            <button onClick={() => adicionarFavorito(list)}>
              Adicionar Favoritos
            </button>
          </li>
        ))}
      </ul>
      <h2> Lista Favoritos </h2>
      <ul>
        {favs.map(fav => (
          <li key={fav}>
            {fav} <button onClick={() => removerFavorito(fav)}> Remover favoritos </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
