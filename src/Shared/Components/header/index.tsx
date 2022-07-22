import LogoImg from '../../Assets/Logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Logo src={LogoImg} alt="Logo Todo" />
    </S.Container>
  );
};
