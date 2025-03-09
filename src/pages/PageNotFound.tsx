import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
      <Box>
        <Typography variant="h1" color="text.primary" fontWeight="bold">
          404
        </Typography>
        <Typography variant="h5" color="text.secondary" mt={2}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          component={Link}
          to="/"
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
