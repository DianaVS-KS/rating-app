import { AppBar, Box, Container, Typography } from "@mui/material";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <AppBar className={styles.appBarContainer} position="static">
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography>Rating App</Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
