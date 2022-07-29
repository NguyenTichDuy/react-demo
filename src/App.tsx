import Routers from "./router/index";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShopAllHeader from "Components/organisms/shop-all-header";
import Footer from "Components/organisms/footer";
import Themes from "Themes/index";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={Themes}>
        <Container maxW={"1440px"}>
          <ShopAllHeader />
          <Box paddingY={16}>
            <Routers />
          </Box>
          <Footer />
        </Container>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
