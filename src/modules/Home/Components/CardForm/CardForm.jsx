import {
  Button,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Fragment, useState } from "react";
import { data } from "../../../../assets/imagesList.json";
import styles from "./CardForm.module.scss";
import clsx from "clsx";
import { ArrowBack } from "@mui/icons-material";

const initialErrorState = {
  image: false,
  title: false,
  description: false,
};

export const CardForm = ({ goBack, handleSubmitCard }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState(initialErrorState);

  const handleImageChange = (pic) => {
    setImage(pic);
    setErrors((prevErrors) => ({ ...prevErrors, image: false }));
  };

  const handleTitleChange = (title) => {
    setTitle(title);
    setErrors((prevErrors) => ({ ...prevErrors, title: false }));
  };

  const handleDescriptionChange = (description) => {
    setDescription(description);
    setErrors((prevErrors) => ({ ...prevErrors, description: false }));
  };

  const handleSubmit = () => {
    if (image === "")
      setErrors((prevErrors) => ({ ...prevErrors, image: true }));
    if (title === "")
      setErrors((prevErrors) => ({ ...prevErrors, title: true }));
    if (description === "")
      setErrors((prevErrors) => ({ ...prevErrors, description: true }));
    if (image !== "" && title !== "" && description !== "") {
      const newCard = {
        description,
        title,
        pic: image,
        ratings: [],
      };
      handleSubmitCard(newCard);
    }
  };

  return (
    <Fragment>
      <IconButton className={styles.goBackIcon} onClick={goBack}>
        <ArrowBack />
      </IconButton>
      <form>
        <Typography className={clsx(errors.image && styles.imageError)}>
          Select an Image for your card
        </Typography>
        <Box display="flex" gap="12px" flexWrap="wrap" marginTop="16px">
          {data.map(({ id, pic }) => (
            <Card
              key={id}
              className={clsx(
                styles.card,
                image === pic && styles.selectedImage
              )}
            >
              <CardActionArea onClick={() => handleImageChange(pic)}>
                <CardMedia component="img" image={pic} height="102px" />
              </CardActionArea>
            </Card>
          ))}
        </Box>
        <TextField
          className={styles.field}
          error={errors.title}
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <TextField
          className={styles.field}
          error={errors.description}
          label="Description"
          minRows={6}
          multiline
          fullWidth
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
        />
        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Fragment>
  );
};
