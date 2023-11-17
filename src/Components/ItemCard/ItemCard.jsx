import { Star } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./ItemCard.module.scss";

export const ItemCard = ({ ratingAverage, pic, title, onClick }) => {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="130px"
          image={pic}
          alt={`${title}-overview`}
        />
        <CardContent>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2">{title}</Typography>
            <Box className={styles.ratingTag}>
              <Typography variant="caption">{ratingAverage}</Typography>
              <Star />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
