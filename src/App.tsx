import Routers from "./router/index";
import { Container, Box } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShopAllHeader from "Components/organisms/shop-all-header";
import Footer from "Components/organisms/footer";
// import Themes from "Themes/index";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
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
