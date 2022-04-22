import React from "react";

interface TextBoxProps {
  id: string;
  title: string;
  min: string;
  max: string;
  pattern: string;
  displayError: boolean;
  errMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  id,
  title,
  min,
  max,
  pattern,
  displayError,
  errMessage,
  onChange,
}) => {
  return (
    <div>
      <label className="form-control" htmlFor={id}>
        {title}
      </label>
      <input
        className="form-control"
        data-testid={id}
        type="text"
        min={min}
        max={max}
        pattern={pattern}
        title="Must contain 3 letters and should only be aplphabets!"
        onChange={onChange}
        required
      />
      <p hidden={displayError} className="error">
        {errMessage}
      </p>
    </div>
  );
};

export default TextBox;
