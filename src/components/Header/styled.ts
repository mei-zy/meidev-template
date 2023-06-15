import { MediaQueries } from "@styles/theme";
import { styled } from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  padding-top: 15px;

  @media only screen and (max-width: ${MediaQueries.tablet}px) {
    margin-bttom: 57px;
  }
`;

const HeaderMenuWrapper = styled.ul`
  display: flex;

  li {
    padding: 5px;
    margin-right: 10px;
  }

  li:last-of-type {
    margin-right: 0px;
  }
`;

const HeaderStyle = {
  HeaderWrapper,
  HeaderMenuWrapper,
};

export default HeaderStyle;
