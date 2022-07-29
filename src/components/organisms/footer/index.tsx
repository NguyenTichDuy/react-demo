import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import Button from "Components/atoms/button";
import Input from "Components/atoms/input";

const pages = [
  ["Shop All", "About", "Contact", "Stockists"],
  ["FAQ", "Shipping & Returns", "Store Policy", "Payment Methods"],
  ["Facebook", "Pinterest", "Instagram", "Twitter"],
];
const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={8}
      bg={"black"}
      paddingY={12}
      color={"whiteAlpha.700"}
    >
      {pages.map((val, i) => (
        <GridItem colStart={2 + i}>
          <VStack>
            {val.map((content) => (
              <Text>{content}</Text>
            ))}
          </VStack>
        </GridItem>
      ))}
      <GridItem>
        <VStack>
          <Text fontSize={"lg"}>Join our mailing list</Text>
          <Text>and get 10% off</Text>
          <Input placeholder="Enter your email here*" />
          <Button variant="plane">Subscribe Now</Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
