import React from "react";
import TextBoxStructure from "../data/textbox-struct";

interface TextBoxProps {
  textboxObject: TextBoxStructure;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<TextBoxProps> = ({ textboxObject, onChange }) => {
  return (
    <div>
      <label className="form-control" htmlFor={textboxObject.id}>
        {textboxObject.title}
      </label>
      <input
        className="form-control"
        data-testid={textboxObject.id}
        type="text"
        min={textboxObject.min}
        max={textboxObject.max}
        pattern={textboxObject.pattern}
        onChange={onChange}
        required
      />
      <p
        data-testid="errormessage"
        hidden={!textboxObject.displayError}
        className="error"
      >
        {textboxObject.errMessage}
      </p>
    </div>
  );
};

export default TextBox;
