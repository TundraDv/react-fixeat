import React, { useEffect, useState } from 'react';
import { Box, TextField, CircularProgress, Typography, Pagination } from '@mui/material';
import CharactersTable from '../Components/CharactersTable';
import { useCharacters } from '../Contexts/CharactersContext';

const PAGE_SIZE = 20; 

function CharactersView() {
  const { characters, loading, error } = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setPage(1);
  }, [searchTerm, characters]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }  

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }


  return (
    <Box sx={{ padding: 10, width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: "70%", textAlign: 'center'}}>
        <Typography variant="h2" sx={{ marginY: 2}}> 
            <b>
             Rick and Morty Characters
            </b>
        </Typography>
        <TextField
          label="Search by name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        <CharactersTable 
          characters={filteredCharacters.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)}
        />
        <Pagination
          count={Math.ceil(filteredCharacters.length / PAGE_SIZE)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      </Box>
    </Box>
  );
}

export default CharactersView;
