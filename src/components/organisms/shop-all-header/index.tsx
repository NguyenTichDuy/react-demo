import { Box, Flex, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import LoginAvatar from "Components/molecules/login-avatar";
import Logo from "Components/molecules/logo";
import Navigate from "Components/molecules/navigate";
import SearchInput from "Components/molecules/search-input";

const ShopAllHeader = () => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      justifyContent={"center"}
      gap={4}
      bg={"white"}
      paddingX={2}
      paddingY={4}
    >
      <GridItem colStart={1} colEnd={3}>
        <Logo />
      </GridItem>
      <GridItem colStart={3} colEnd={6}>
        <SearchInput />
      </GridItem>
      <GridItem colStart={6} colEnd={11} display={"flex"}>
        <Navigate />
      </GridItem>
      <GridItem colStart={11} colEnd={13} display={"flex"}>
        <LoginAvatar />
      </GridItem>
    </Grid>
  );
};

export default ShopAllHeader;
