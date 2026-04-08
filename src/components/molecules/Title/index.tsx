import { Box, Divider, Heading } from "@chakra-ui/layout";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Box position="relative">
      <Heading as={"h1"} size={"4xl"} zIndex={0}>
        {children}
      </Heading>
      <Divider
        size={"lg"}
        border={"8px"}
        borderColor={"orange"}
        position={"absolute"}
        bottom={"3"}
        zIndex={-1}
      />
    </Box>
  );
};

export default Title;
