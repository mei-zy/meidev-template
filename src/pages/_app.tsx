import { ThemeProvider, styled } from "styled-components";
import { Reset } from "styled-reset";

import { theme, GlobalStyle } from "@styles/index";
import { Header } from "@components/index";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <div className="inner">
            <Header />
            <Component {...pageProps} />
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

const Layout = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.base};
`;
