import { AppProps } from "next/app";
import { ReactElement } from "react";
import GlobalStyles from "./../components/GlobalStyles";

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
