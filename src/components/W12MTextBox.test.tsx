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
  //expect(errMsg).toHaveFormValues('t');

  // fireEvent.change(textBox, {
  //   target: { value: "humans" },
  // });
  // expect(textBox.innerText).toBe("humans");
  // expect(TextBoxProps.onChange).toHaveBeenCalled();
  // expect(TextBoxProps.onChange).toHaveBeenCalledTimes(6);
});

// test("calls onChange function with passed onChangeSpeciesName prop", async () => {
//   const textBox_speciesName = {
//     id: "",
//     title: "",
//     onChangeTextBox: jest.fn(),
//   };
//   render(<W12MTextBox {...textBox_speciesName} />);
//   const textBox = screen.getByLabelText("speciesName");
//   fireEvent.change(textBox, {
//     target: { value: "humans" },
//   });
//   expect(textBox.innerText).toBe("humans");
//   expect(textBox_speciesName.onChangeTextBox).toHaveBeenCalled();
//   expect(textBox_speciesName.onChangeTextBox).toHaveBeenCalledTimes(6);
// });
