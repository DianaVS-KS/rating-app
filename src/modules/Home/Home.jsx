import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fragment, useMemo, useState } from "react";
import { ItemCard } from "../../Components/ItemCard/ItemCard";
import { ViewTitle } from "../../Components/ViewTitle/ViewTitle";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styles from "./Home.module.scss";
import { RatingForm } from "./Components/RatingForm/RatingForm";
import { CHILDREN_ROUTES, MAIN_ROUTES } from "../../routes/routes";
import mockItems from "../../assets/mockItems.json";
import { CardForm } from "./Components/CardForm/CardForm";
import { InitialDisplayState } from "./Components/InitialDisplayState/InitialDisplayState";

const userName = "Bob";

export const Home = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const params = useParams();
  const location = useLocation();
  const splittedLocation = location.pathname.split("/");
  const currentPath = splittedLocation.pop();
  const navigate = useNavigate();
  const [itemsList, setItemsList] = useState(mockItems.data);

  const paddingLeft2Col = useMemo(
    () => (smallScreen ? "0" : "24px"),
    [smallScreen]
  );

  const handleGoBack = () => {
    navigate(MAIN_ROUTES.HOME);
  };

  const handleSubmitCard = (newCard) => {
    const newItem = {
      ...newCard,
      id: itemsList[itemsList.length - 1].id + 1 || 0,
    };
    setItemsList((prevList) => [...prevList, newItem]);
    handleGoBack();
  };

  const handleSubmitRating = (newRating) => {
    const { comments, ratingValue, cardId } = newRating;
    const currentRatings = itemsList[cardId].ratings;
    const newId =
      currentRatings.length === 0
        ? 0
        : currentRatings[currentRatings.length - 1].id + 1;
    const newReview = { comments, ratingValue, id: newId };
    setItemsList((prevList) => {
      prevList[cardId].ratings.push(newReview);
      return [...prevList];
    });
    handleGoBack();
  };

  const displayInfo = () => {
    if (currentPath === "new")
      return (
        <CardForm goBack={handleGoBack} handleSubmitCard={handleSubmitCard} />
      );
    if (params.id !== undefined)
      return (
        <RatingForm
          goBack={handleGoBack}
          item={itemsList[params.id]}
          handleSubmitRating={handleSubmitRating}
        />
      );
    return (
      <InitialDisplayState
        handleNewCard={() => navigate(`${CHILDREN_ROUTES.CARDS.NEW}`)}
      />
    );
  };

  return (
    <Fragment>
      <ViewTitle userName={userName} />
      <Container maxWidth="lg">
        <Grid container marginY="44px">
          <Grid
            className={styles.cardsContainer}
            item
            md={4}
            xs={12}
            padding="16px"
          >
            <Typography>Select the cards in order to evaluate them</Typography>
            {itemsList.map(({ id, pic, ratings, title }, idx) => {
              const ratingAverage =
                ratings.reduce((p, { ratingValue }) => p + ratingValue, 0) /
                  ratings.length || 0;
              return (
                <Box key={id} marginTop={idx === 0 ? "16px" : "24px"}>
                  <ItemCard
                    pic={pic}
                    ratingAverage={ratingAverage}
                    title={title}
                    onClick={() => navigate(`${MAIN_ROUTES.CARDS}/${id}`)}
                  />
                </Box>
              );
            })}
          </Grid>
          <Grid item md={8} xs={12} paddingLeft={paddingLeft2Col}>
            <Box
              className={styles.dynamicContainer}
              padding="48px"
              position="relative"
            >
              {displayInfo()}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
