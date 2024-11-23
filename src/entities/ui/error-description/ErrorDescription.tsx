import { ErrorDescriptionProps } from '../../types';

export const ErrorDescription: React.FC<ErrorDescriptionProps> = (props) => {
  const { errorId, text } = props;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl leading-[1.33] font-unbounded">{`Ошибка ${errorId}`}</h2>
      {text && <p className="text-base leading-normal">{text}</p>}
    </div>
  );
};
