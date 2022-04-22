import React, { useState } from "react";
import W12MHeader from "./W12MHeader";
import W12MTextBox from "./W12MTextBox";
import W12MSelectBox from "./W12MSelectBox";
import W12MTextAreaBox from "./W12MTextAreaBox";

interface W12MFormProps {
  allTextBoxes: Array<{
    id: string;
    title: string;
    min: string;
    max: string;
    pattern: string;
    displayError: boolean;
    errMessage: string;
  }>;
  allSelectBoxes: Array<{
    id: string;
    title: string;
    option1: string;
    option2: string;
  }>;
  allTextAreaBoxes: Array<{
    id: string;
    title: string;
    min: number;
    max: number;
    displayError: boolean;
    errMessage: string;
  }>;
}

const W12MForm: React.FC<W12MFormProps> = ({
  allTextBoxes,
  allSelectBoxes,
  allTextAreaBoxes,
}) => {
  const [speciesTextBoxInfo, setSpeciesTextBoxInfo] = useState<string>("");
  const [planetTextBoxInfo, setPlanetTextBoxInfo] = useState<string>("");
  const [beingsNumberTextBoxInfo, setBeingNumberTextBoxInfo] =
    useState<string>("");
  const [selectBoxInfo, setSelectBoxInfo] = useState<string>("");
  const [textAreaBoxInfo, setTextAreaBoxInfo] = useState<string>("");
  const [items, setItems] = useState<string>("");

  const onChangeTextBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.testid === "speciesName") {
      allTextBoxes[0].displayError = false;
      setSpeciesTextBoxInfo(event.target.value);
      allTextBoxes[0].displayError = validate(
        event.target.pattern,
        event.target.value
      );
    } else if (event.target.dataset.testid === "planetName") {
      setPlanetTextBoxInfo(event.target.value);
      allTextBoxes[1].displayError = validate(
        event.target.pattern,
        event.target.value
      );
    } else if (event.target.dataset.testid === "numberOfBeings") {
      setBeingNumberTextBoxInfo(event.target.value);
      allTextBoxes[2].displayError = validate(
        event.target.pattern,
        event.target.value
      );
    }
    let count = 0;
    count += 1;
    console.log(
      "textbox change called " + event.target.value + " count------>>" + count
    );
  };

  const onChangeSelectBox = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectBoxInfo(event.target.value);
    let count = 0;
    count += 1;
    console.log(
      "select box change called " +
        event.target.value +
        " count------>>" +
        count
    );
  };

  const onChangeTextAreaBox = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaBoxInfo(event.target.value);
    let count = 0;
    count += 1;
    console.log(
      "text area box change called " +
        event.target.value +
        " count------>>" +
        count
    );
  };

  const validate = (fieldPattern: string, value: string): boolean => {
    var regEX = new RegExp(fieldPattern);
    return regEX.test(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const allValues = speciesTextBoxInfo
      .concat(planetTextBoxInfo)
      .concat(beingsNumberTextBoxInfo)
      .concat(selectBoxInfo)
      .concat(textAreaBoxInfo);
    setItems(allValues);
    event.preventDefault();
    console.log("OnSUbmit------->>>" + allValues);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="w12MForm" className="w12MForm">
      <W12MHeader />
      {allTextBoxes.map((textbox, index) => (
        <W12MTextBox
          id={textbox.id}
          title={textbox.title}
          min={textbox.min}
          max={textbox.max}
          pattern={textbox.pattern}
          displayError={textbox.displayError}
          errMessage={textbox.errMessage}
          onChange={onChangeTextBox}
        />
      ))}
      {allSelectBoxes.map((selectbox) => (
        <W12MSelectBox
          id={selectbox.id}
          title={selectbox.title}
          option1={selectbox.option1}
          option2={selectbox.option2}
          onChange={onChangeSelectBox}
        />
      ))}
      {allTextAreaBoxes.map((textareabox) => (
        <W12MTextAreaBox
          id={textareabox.id}
          title={textareabox.title}
          min={textareabox.min}
          max={textareabox.max}
          displayError={textareabox.displayError}
          errMessage={textareabox.errMessage}
          onChange={onChangeTextAreaBox}
        />
      ))}
      <input
        type="submit"
        data-testid="submit"
        value="Submit"
        className="btn btn-primary"
      />
    </form>
  );
};

export default W12MForm;
