import { MediaQueries } from "@styles/theme";
import { styled } from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 90px;

  @media only screen and (max-width: ${MediaQueries.tablet}px) {
    margin-bttom: 57px;
  }
`;

const HeaderMenuWrapper = styled.ul`
  display: flex;
`;

const HeaderStyle = {
  HeaderWrapper,
  HeaderMenuWrapper,
};

export default HeaderStyle;
