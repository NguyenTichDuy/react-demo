import { Box, Heading } from "@chakra-ui/layout";

const Logo = () => {
  return (
    <Box bg={"black"} paddingX={3} paddingY={2}>
      <Heading as={"h3"} size="md" color={"white"} textAlign={"center"}>
        N O U S
      </Heading>
    </Box>
  );
};

export default Logo;
