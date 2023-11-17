import { Box, Container, Typography } from "@mui/material";
import styles from "./ViewTitle.module.scss";

export const ViewTitle = ({ userName = "Friend" }) => {
  return (
    <Box className={styles.titleContainer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1">Hello, {userName}!</Typography>
        <Typography variant="h2">Welcome to the Rating App!</Typography>
      </Container>
    </Box>
  );
};
