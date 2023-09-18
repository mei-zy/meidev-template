import { ThemeProvider, styled } from "styled-components";
import { useState } from "react";

import { GlobalStyle, darkTheme, lightTheme } from "@styles/index";
import { Header } from "@components/index";
import Head from "next/head";
import Info from "data";

export default function MyApp({ Component, pageProps }: any) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head>
        <title>{Info.title}</title>
        {/* <meta name="description" content="인덱스 페이지입니다." /> */}
      </Head>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
