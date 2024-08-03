import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CharactersTable = ({ characters }) => {
  const navigate = useNavigate();

  const handleRowClick = (character) => {
    navigate(`/character/${character.id}`, { state: { character } });
  };

  return (

    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: '100%' }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
          <TableCell sx={{ width: '40%' }}>Name</TableCell>
          {/* <TableCell sx={{ width: '20%' }}>Status</TableCell>
          <TableCell sx={{ width: '20%' }}>Species</TableCell>
          <TableCell sx={{ width: '20%' }}>Gender</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {characters.map((character) => (
          <TableRow key={character.id} onClick={() => handleRowClick(character)} sx={{ cursor: 'pointer' }}>
            <TableCell>{character.name}</TableCell>
            {/* <TableCell>{character.status}</TableCell>
            <TableCell>{character.species}</TableCell>
            <TableCell>{character.gender}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
};

export default CharactersTable;
