import S from "./styled";

import type { TextProps } from "./type";

const Text = (props: TextProps) => {
  const checkStrIsEn = () => {
    const regExp = /[a-zA-Z]/g; // 영어
    if (regExp.test(props.children)) {
      return true;
    }

    return false;
  };

  return (
    <S.TextWrapper
      $isEn={checkStrIsEn()}
      color={props.color}
      size={props.size}
      weight={props.weight}
    >
      {props.children}
    </S.TextWrapper>
  );
};

export default Text;
