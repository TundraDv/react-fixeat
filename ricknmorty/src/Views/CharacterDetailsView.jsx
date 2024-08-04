import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Stack, Container, Card } from '@mui/material';

function CharacterDetailsView() {
  const location = useLocation();
  const character = location.state?.character;

  if (!character) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6">
          No character details available
        </Typography>
      </Box>
    )
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container sx={{ padding: 5, margin: 4 }}>
        <Typography variant="h2"><b>{character.name}</b></Typography>
        <Card sx={{ padding: 5, margin: 1 }}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            alignItems="center"
          >
            <img 
              src={character.image} 
              alt={character.name} 
              sx={{ maxWidth: '100%', height: 'auto' }} 
              />
            <Stack>
              <Stack direction="row" spacing={3} alignItems="center">
                <Stack spacing={3}>
                  <Typography><b>Status:</b></Typography>
                  <Typography><b>Species:</b></Typography>
                  <Typography><b>Gender:</b></Typography>
                  <Typography><b>Origin:</b></Typography>
                  <Typography><b>Location:</b></Typography>
                  <Typography><b>Created:</b></Typography>
                </Stack>
                <Stack spacing={3}>
                  <Typography>{character.status}</Typography>
                  <Typography>{character.species}</Typography>
                  <Typography>{character.gender}</Typography>
                  <Typography>{character.origin.name}</Typography>
                  <Typography>{character.location.name}</Typography>
                  <Typography>{new Date(character.created).toLocaleString()}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}

export default CharacterDetailsView;


