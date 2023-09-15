// pages/_app.js
import { CrudProvider } from "@/context/crudProvider";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <CrudProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </CrudProvider>

  );
}

export default MyApp;
