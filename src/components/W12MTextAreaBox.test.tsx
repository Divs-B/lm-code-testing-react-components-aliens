import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import W12MTextAreaBox from "./W12MTextAreaBox";

test("textareabox render test", () => {
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };
  const TextAreaBoxProps = {
    textareaObject: textAreaBox_test_reasonForSparing,
    onChange: jest.fn(),
  };
  render(<W12MTextAreaBox {...TextAreaBoxProps} />);
  const textareaBox = screen.getByTestId("reasonForSparing");
  expect(textareaBox).toBeInTheDocument();
});

test("textareabox value on Onchange test", () => {
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };
  const TextAreaBoxProps = {
    textareaObject: textAreaBox_test_reasonForSparing,
    onChange: jest.fn(),
  };
  render(<W12MTextAreaBox {...TextAreaBoxProps} />);
  const textareaBox = screen.getByTestId("reasonForSparing");
  fireEvent.change(textareaBox, {
    target: { value: "genius is by hardwork" },
  });
  expect(textareaBox.value).toBe("genius is by hardwork");
});

test("textareabox errormessage render test", () => {
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };
  const TextAreaBoxProps = {
    textareaObject: textAreaBox_test_reasonForSparing,
    onChange: jest.fn(),
  };
  render(<W12MTextAreaBox {...TextAreaBoxProps} />);
  const errMsg = screen.getByTestId("errormessage");
  expect(errMsg).toBeInTheDocument();
});

test("textareabox errormessage visibility test", () => {
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };
  const TextAreaBoxProps = {
    textareaObject: textAreaBox_test_reasonForSparing,
    onChange: jest.fn(),
  };
  render(<W12MTextAreaBox {...TextAreaBoxProps} />);
  const errMsg = screen.getByTestId("errormessage");
  expect(errMsg).toHaveProperty("hidden", true);
});
