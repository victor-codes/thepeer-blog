import "../styles/scss/main.scss";
import type { AppProps } from "next/app";
// import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
  // const queryClient = new QueryClient();
  return (
    <Component {...pageProps} />
    // <QueryClientProvider client={queryClient}>
    //   <Hydrate state={pageProps.dehydratedState}>
    //     {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    //   </Hydrate>
    // </QueryClientProvider>
  );
}
