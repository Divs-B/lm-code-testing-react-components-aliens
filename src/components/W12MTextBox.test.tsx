import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import W12MTextBox from "./W12MTextBox";

test("textbox render test", () => {
  const textBox_test_speciesName = {
    id: "speciesName",
    title: "Species Name",
    min: "3",
    max: "23",
    pattern: "^[a-zA-Z ]+$",
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter only alphabets, atleast 3 characters and maximum 17 characters!",
  };
  const TextBoxProps = {
    textboxObject: textBox_test_speciesName,
    onChange: jest.fn(),
  };
  render(<W12MTextBox {...TextBoxProps} />);
  const textBox = screen.getByTestId("speciesName");
  expect(textBox).toBeInTheDocument();
});

test("textbox value on Onchange test", () => {
  const textBox_test_speciesName = {
    id: "speciesName",
    title: "Species Name",
    min: "3",
    max: "23",
    pattern: "^[a-zA-Z ]+$",
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter only alphabets, atleast 3 characters and maximum 17 characters!",
  };
  const TextBoxProps = {
    textboxObject: textBox_test_speciesName,
    onChange: jest.fn(),
  };
  render(<W12MTextBox {...TextBoxProps} />);
  const textBox = screen.getByTestId("speciesName");
  fireEvent.change(textBox, {
    target: { value: "genius" },
  });
  expect(textBox.value).toBe("genius");
});

test("textbox errormessage render test", () => {
  const textBox_test_planetName = {
    id: "planetName",
    title: "Planet Name",
    min: "2",
    max: "49",
    pattern: "^[a-zA-Z0-9 ]+$",
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter only alphabets or numbers, atleast 2 characters and maximum 49 characters!",
  };
  const TextBoxProps = {
    textboxObject: textBox_test_planetName,
    onChange: jest.fn(),
  };
  render(<W12MTextBox {...TextBoxProps} />);
  const errMsg = screen.getByTestId("errormessage");
  expect(errMsg).toBeInTheDocument();
});

test("textbox errormessage visibility test", () => {
  const textBox_test_numberOfBeings = {
    id: "numberOfBeings",
    title: "Number of beings",
    min: "10",
    max: "20",
    pattern: "^[0-9]+$",
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter only numbers, atleast 10 digit number!",
  };
  const TextBoxProps = {
    textboxObject: textBox_test_numberOfBeings,
    onChange: jest.fn(),
  };
  render(<W12MTextBox {...TextBoxProps} />);
  const errMsg = screen.getByTestId("errormessage");
  expect(errMsg).toHaveProperty("hidden", true);
});
