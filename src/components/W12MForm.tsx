import React, { useState } from "react";
import W12MHeader from "./W12MHeader";
import W12MTextBox from "./W12MTextBox";
import W12MSelectBox from "./W12MSelectBox";
import W12MTextAreaBox from "./W12MTextAreaBox";
import TextBoxStructure from "../data/textbox-struct";
import SelectBoxStructure from "../data/selectbox-struct";
import TextAreaStructure from "../data/textarea-struct";

interface W12MFormProps {
  allTextBoxes: Array<TextBoxStructure>;
  allSelectBoxes: Array<SelectBoxStructure>;
  allTextAreaBoxes: Array<TextAreaStructure>;
}

const W12MForm: React.FC<W12MFormProps> = ({
  allTextBoxes,
  allSelectBoxes,
  allTextAreaBoxes,
}) => {
  const [speciesTextBoxInfo, setSpeciesTextBoxInfo] = useState<string>("");
  const [planetTextBoxInfo, setPlanetTextBoxInfo] = useState<string>("");
  const [beingsTextBoxInfo, setBeingTextBoxInfo] = useState<string>("");
  const [selectBoxInfo, setSelectBoxInfo] = useState<string>("");
  const [textAreaBoxInfo, setTextAreaBoxInfo] = useState<string>("");
  const [dataOnSubmit, setDataOnSubmit] = useState<string>("");

  const onChangeTextBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.testid === "speciesName") {
      const minNumber = Number.parseInt(event.target.min);
      const maxNumber = Number.parseInt(event.target.max);
      allTextBoxes[0].displayError = validate(
        event.target.pattern,
        event.target.value,
        minNumber,
        maxNumber,
        -1
      );
      setSpeciesTextBoxInfo(event.target.value);
    } else if (event.target.dataset.testid === "planetName") {
      setPlanetTextBoxInfo(event.target.value);
      const minNumber = Number.parseInt(event.target.min);
      const maxNumber = Number.parseInt(event.target.max);
      allTextBoxes[1].displayError = validate(
        event.target.pattern,
        event.target.value,
        minNumber,
        maxNumber,
        -1
      );
    } else if (event.target.dataset.testid === "numberOfBeings") {
      setBeingTextBoxInfo(event.target.value);
      const minNumber = Number.parseInt(event.target.min);
      const maxNumber = Number.parseInt(event.target.max);
      allTextBoxes[2].displayError = validate(
        event.target.pattern,
        event.target.value,
        minNumber,
        maxNumber,
        -1
      );
    }
  };

  const onChangeSelectBox = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectBoxInfo(event.target.value);
    allSelectBoxes[0].displayError = validate(
      "",
      event.target.value,
      -1,
      -1,
      event.target.selectedIndex
    );
  };

  const onChangeTextAreaBox = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaBoxInfo(event.target.value);
    allTextAreaBoxes[0].displayError = validate(
      "",
      event.target.value,
      event.target.minLength,
      event.target.maxLength,
      -1
    );
  };

  const validate = (
    fieldPattern: string,
    value: string,
    min: number,
    max: number,
    optionIndex: number
  ): boolean => {
    let isPatternMatched = false;

    if (fieldPattern.length > 0) {
      const regEx = new RegExp(fieldPattern);
      isPatternMatched = regEx.test(value);
      if (!isPatternMatched) return true;
    }

    if (optionIndex !== -1) {
      if (optionIndex !== 0) return true;
    } else if (
      min !== -1 &&
      max !== -1 &&
      (value.length < min || value.length > max)
    )
      return true;

    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let allValues = "";
    if (
      !allTextBoxes[0].displayError &&
      !allTextBoxes[1].displayError &&
      !allTextBoxes[2].displayError &&
      !allSelectBoxes[0].displayError &&
      !allTextAreaBoxes[0].displayError
    ) {
      allValues = speciesTextBoxInfo
        .concat(planetTextBoxInfo)
        .concat(beingsTextBoxInfo)
        .concat(selectBoxInfo)
        .concat(textAreaBoxInfo);
      setDataOnSubmit(allValues);
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} data-testid="w12MForm" className="w12MForm">
      <W12MHeader />
      {allTextBoxes.map((textbox) => (
        <W12MTextBox textboxObject={textbox} onChange={onChangeTextBox} />
      ))}
      {allSelectBoxes.map((selectbox) => (
        <W12MSelectBox
          selectboxObject={selectbox}
          onChange={onChangeSelectBox}
        />
      ))}
      {allTextAreaBoxes.map((textareabox) => (
        <W12MTextAreaBox
          textareaObject={textareabox}
          onChange={onChangeTextAreaBox}
        />
      ))}
      <input
        type="submit"
        data-testid="submit"
        value="Submit"
        className="btn btn-primary"
      />
      <p data-testid="data-onsubmit">{dataOnSubmit}</p>
    </form>
  );
};

export default W12MForm;
