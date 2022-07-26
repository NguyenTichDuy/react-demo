import { Box, Grid, GridItem } from "@chakra-ui/react";

const data = ["Shop All", "About", "Contact", "Stockists"];
const Footer = () => {
  return (
    <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(12, 1fr)">
      <GridItem>Shop All</GridItem>
      <GridItem>About</GridItem>
      <GridItem>Contact </GridItem>
      <GridItem>Stockists</GridItem>
    </Grid>
  );
};

export default Footer;
