import { MDXProvider } from "@mdx-js/react";
import HelloWorld from "../mdx/hello.mdx";
import S from "@styles/page/main";
import Text from "@components/Text";

export default function Page() {
  return (
    <>
      <S.MainWrapper>
        <div className="info">
          <Text size="l" weight="b">
            All
          </Text>
          <Text size="l" weight="l">
            , 13 posts
          </Text>
        </div>
      </S.MainWrapper>
      <MDXProvider>
        <HelloWorld />
      </MDXProvider>
    </>
  );
}
