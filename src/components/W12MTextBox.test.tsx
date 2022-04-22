import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import W12MTextBox from "./W12MTextBox";

test("to see if render properly the textbox", () => {
  const textBox_speciesName = {
    id: "speciesName",
    title: "Species Name",
    onChange: jest.fn(),
  };
  render(<W12MTextBox {...textBox_speciesName} />);
  const textBox = screen.getByTestId("speciesName");
  expect(textBox).toBeInTheDocument();
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
