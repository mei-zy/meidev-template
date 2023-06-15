import Info from "data";
import Link from "next/link";
import { Text } from "@components/index";
import S from "./styled";

const Header = () => {
  const title = Info.title.split(" ");

  return (
    <S.HeaderWrapper>
      <h1>
        <Text size="lg" weight="b">
          {title[0]}
        </Text>
        <Text size="lg">{title[1]}</Text>
      </h1>
      <S.HeaderMenuWrapper>
        <li className="dev-menu">
          <Link href="/">
            <Text size="default" weight="l">
              Dev
            </Text>
          </Link>
        </li>
        <li className="guest-menu">
          <Link href="/guest">
            <Text size="default" weight="l">
              Guest
            </Text>
          </Link>
        </li>
      </S.HeaderMenuWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
