import * as S from './Presentation.styles';

const Presentation = function ({ title, description }) {
  return (
    <S.Presentation>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Presentation>
  );
};

export default Presentation;
