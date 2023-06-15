import { ThemeProvider, styled } from "styled-components";
import { Reset } from "styled-reset";

import { theme, GlobalStyle } from "@styles/index";
import { Header } from "@components/index";
import Head from "next/head";
import Info from "data";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>{Info.title}</title>
        {/* <meta name="description" content="인덱스 페이지입니다." /> */}
      </Head>
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
