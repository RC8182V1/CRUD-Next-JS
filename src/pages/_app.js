// pages/_app.js
import { CrudProvider } from "@/context/crudProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CrudProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </CrudProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
