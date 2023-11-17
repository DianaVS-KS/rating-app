import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./RatingForm.module.scss";
import { Fragment, useState } from "react";
import { ArrowBack, Star } from "@mui/icons-material";

export const RatingForm = ({ item, goBack, handleSubmitRating }) => {
  const { id, title, description, pic } = item;
  const [ratingValue, setRatingValue] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    const newRating = {
      comments,
      ratingValue,
      cardId: id,
    };
    handleSubmitRating(newRating);
  };

  return (
    <Fragment>
      <IconButton className={styles.goBackIcon} onClick={goBack}>
        <ArrowBack />
      </IconButton>
      <form>
        <Box display="flex" justifyContent="center">
          <img className={styles.itemImage} src={pic || ""} alt={title} />
        </Box>
        <Grid container marginTop="34px" alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography variant="h3">{title}</Typography>
          </Grid>
          <Grid item md={6} xs={12} position="relative">
            <Box>
              <Box
                display="flex"
                position="absolute"
                top="20px"
                justifyContent="space-between"
                right="0"
              >
                <Typography className={styles.ratingNumber}>1</Typography>
                <Typography className={styles.ratingNumber}>2</Typography>
                <Typography className={styles.ratingNumber}>3</Typography>
                <Typography className={styles.ratingNumber}>4</Typography>
                <Typography className={styles.ratingNumber}>5</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Rating
                  size="large"
                  value={ratingValue}
                  emptyIcon={
                    <Star className={styles.emptyStar} fontSize="inherit" />
                  }
                  onChange={(e, newValue) => setRatingValue(newValue)}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box marginTop="24px">
          <Typography variant="body2">{description}</Typography>
          <TextField
            className={styles.commentsField}
            label="Comments"
            minRows={6}
            multiline
            fullWidth
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <Button
            className={styles.submitButton}
            fullWidth
            onClick={handleSubmit}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};
