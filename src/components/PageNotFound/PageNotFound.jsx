import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './PageNotFound.module.css';
export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img
        src="https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="moon"
        className={styles.moon}
      />

      <Typography variant="h5" sx={{ mt: 2 }}>
        looks like you are lost! Go home
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color={'primary'} onClick={() => navigate('/')}>
          Go Home
        </Button>
      </Box>
    </Container>
  );
}
