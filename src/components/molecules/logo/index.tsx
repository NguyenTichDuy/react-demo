import { Box, Heading } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <Box
      as={RouterLink}
      to="/"
      bg={"black"}
      paddingX={3}
      paddingY={2}
      display="inline-block"
      _hover={{ opacity: 0.9 }}
    >
      <Heading as={"h3"} size="md" color={"white"} textAlign={"center"}>
        N O U S
      </Heading>
    </Box>
  );
};

export default Logo;
