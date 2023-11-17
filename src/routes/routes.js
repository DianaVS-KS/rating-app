export const MAIN_ROUTES = {
  HOME: "/",
  CARDS: "/cards",
};

export const CHILDREN_ROUTES_CREATOR = (root) => ({
  NEW: `${root}/new`,
  EDIT: `${root}/edit/:id`,
  ITEM: `${root}/:id`,
});

export const CHILDREN_ROUTES = {
  CARDS: CHILDREN_ROUTES_CREATOR(MAIN_ROUTES.CARDS),
};
