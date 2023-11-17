import { Box, Button, Typography } from "@mui/material";

export const InitialDisplayState = ({ handleNewCard }) => {
  return (
    <Box
      display="flex"
      minHeight="40vh"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Typography
          display="flex"
          justifyContent="center"
          variant="h3"
          width="100%"
          alignItems="center"
        >
          Select a card to evaluate
        </Typography>
        <Typography marginTop="24px" variant="body2">
          or Create a
        </Typography>
      </Box>
      <Button fullWidth onClick={handleNewCard} variant="contained">
        New Card
      </Button>
    </Box>
  );
};
