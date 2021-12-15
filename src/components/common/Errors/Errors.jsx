import * as S from './Errors.styles';

const Errors = function ({ errors }) {
  const errorsMap = errors.map((error) => (
    <S.Alert key={error} variant="danger">
      {error}
    </S.Alert>
  ));

  return <S.Errors>{errors.length > 0 && errorsMap}</S.Errors>;
};

export default Errors;
