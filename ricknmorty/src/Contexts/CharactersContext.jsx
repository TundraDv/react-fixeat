import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const CharactersContext = createContext();

const URL_API = "https://rickandmortyapi.com/api/character?page=";

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cache = useRef({});

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        if (cache.current['allCharacters']) {
          setCharacters(cache.current['allCharacters']);
          setLoading(false);
          return;
        }
        
        let allCharacters = [];
        for (let currentPage = 1; ; currentPage++) {
          const response = await fetch(`${URL_API}${currentPage}`);
          if (!response.ok) {
            throw new Error('Network not ok');
          }
          const result = await response.json();
          allCharacters = [...allCharacters, ...result.results];
          if (!result.info.next) break;
        }

        cache.current['allCharacters'] = allCharacters;

        setCharacters(allCharacters);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, loading, error }}>
      {children}
    </CharactersContext.Provider>
  );
}

export function useCharacters() {
  return useContext(CharactersContext);
}
