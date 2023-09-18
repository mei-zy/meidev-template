import { createGlobalStyle } from "styled-components";
import { MediaQueries } from "@styles/theme";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&family=Poppins:wght@300;400;500&display=swap');

  body,a {
    color:${({ theme }) => theme.contrast};
  }

  a{
    text-decoration:none;
  }

  .inner{
    max-width:${MediaQueries.desktop}px;
    min-width:${MediaQueries.mobile}px;
    padding:0px 20px;
    margin:0 auto;
  }

  /* code 관련 */
  
`;
