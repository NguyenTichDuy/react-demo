import Routers from "./router/index";
import { extendTheme, ChakraProvider, Container, Box } from "@chakra-ui/react";
import { colors, fonts } from "Themes/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShopAllHeader from "Components/organisms/shop-all-header";
import Footer from "Components/organisms/footer";

const queryClient = new QueryClient({});
const theme = extendTheme({ colors, fonts });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Container maxW={"container.lg"}>
          <ShopAllHeader />
          <Box paddingTop={16}>
            <Routers />
          </Box>
          <Footer />
        </Container>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
