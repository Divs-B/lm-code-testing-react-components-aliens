import { fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Children } from "react";
import userEvent from "@testing-library/user-event";

import W12MForm from "./W12MForm";

test("renders form element", () => {
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const textBox_speciesName = {
    id: "speciesName",
    title: "Species Name",
  };
  const textBox_planetName = {
    id: "planetName",
    title: "Planet Name",
  };
  const textBox_numberOfBeings = {
    id: "numberOfBeings",
    title: "Number of beings",
  };
  const selectBox_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
  };
  const textAreaBox_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
  };

  const allTextBoxes = [
    textBox_speciesName,
    textBox_planetName,
    textBox_numberOfBeings,
  ];
  const allSelectBoxes = [selectBox_whatIs2Add2];
  const allTextAreaBoxes = [textAreaBox_reasonForSparing];

  const { container } = render(
    <W12MForm
      allTextBoxes={allTextBoxes}
      allSelectBoxes={allSelectBoxes}
      allTextAreaBoxes={allTextAreaBoxes}
    />
  );

  expect(container.firstChild).toHaveClass("w12MForm");

  const onSubmit = jest.fn();
  render(
    <button onClick={onSubmit} type="submit">
      Submitt
    </button>
  );
  userEvent.click(screen.getByText("Submitt"));
  expect(onSubmit).toBeCalledTimes(1);

  const form = screen.getByTestId("w12MForm");
  const input = screen.getByTestId("speciesName");
  fireEvent.change(input, {
    target: { value: "genius" },
  });
  fireEvent.submit(form);
  expect(input.value).toBe("genius");
  const input1 = screen.getByTestId("planetName");
  fireEvent.change(input1, {
    target: { value: ",genius" },
  });
  fireEvent.submit(form);
  expect(input1.value).toBe(",genius");
  //expect(screen.getByText("genius,genius")).toBeInTheDocument();
});

test("calls onChange function", () => {
  const textBox_speciesName = {
    id: "speciesName",
    title: "Species Name",
  };
  const textBox_planetName = {
    id: "planetName",
    title: "Planet Name",
  };
  const textBox_numberOfBeings = {
    id: "numberOfBeings",
    title: "Number of beings",
  };
  const selectBox_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
  };
  const textAreaBox_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
  };

  const allTextBoxes = [
    textBox_speciesName,
    textBox_planetName,
    textBox_numberOfBeings,
  ];
  const allSelectBoxes = [selectBox_whatIs2Add2];
  const allTextAreaBoxes = [textAreaBox_reasonForSparing];

  const { container } = render(
    <W12MForm
      allTextBoxes={allTextBoxes}
      allSelectBoxes={allSelectBoxes}
      allTextAreaBoxes={allTextAreaBoxes}
    />
  );
  // const textBox_speciesName = {
  //   id: "",
  //   title: "",
  //   onChangeTextBox: jest.fn(),
  // };
  // render(<W12MTextBox {...textBox_speciesName} />);
  const input = screen.getByTestId("speciesName");
  fireEvent.change(input, {
    target: { value: "humanss" },
  });
  expect(input.value).toBe("humanss");
});
