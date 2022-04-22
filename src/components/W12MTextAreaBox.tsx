interface TextAreaBoxProps {
  id: string;
  title: string;
  min: number;
  max: number;
  displayError: boolean;
  errMessage: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaBox: React.FC<TextAreaBoxProps> = ({
  id,
  title,
  min,
  max,
  displayError,
  errMessage,
  onChange,
}) => {
  return (
    <div>
      <label className="form-control" htmlFor={id}>
        {title}
      </label>
      <p>
        <textarea
          className="form-control"
          data-testid={id}
          minLength={min}
          maxLength={max}
          onChange={onChange}
          required
        ></textarea>
      </p>
      <p hidden={displayError} className="error">
        {errMessage}
      </p>
    </div>
  );
};

export default TextAreaBox;
