import { render, screen } from "@testing-library/react";
import W12MSelectBox from "./W12MSelectBox";
import { fireEvent } from "@testing-library/react";

test("selectbox render test", () => {
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const SelectBoxProps = {
    selectboxObject: selectBox_test_whatIs2Add2,
    onChange: jest.fn(),
  };
  render(<W12MSelectBox {...SelectBoxProps} />);
  const selectBoxId = screen.getByTestId("whatIs2Add2");
  expect(selectBoxId).toBeInTheDocument();
});

test("selectbox value on Onchange test", () => {
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const SelectBoxProps = {
    selectboxObject: selectBox_test_whatIs2Add2,
    onChange: jest.fn(),
  };
  render(<W12MSelectBox {...SelectBoxProps} />);
  const selectBox = screen.getByTestId("whatIs2Add2");
  fireEvent.change(selectBox, {
    target: { value: "Not 4" },
  });
  expect(selectBox.value).toBe("Not 4");
});

test("selectbox errormessage render test", () => {
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const SelectBoxProps = {
    selectboxObject: selectBox_test_whatIs2Add2,
    onChange: jest.fn(),
  };
  render(<W12MSelectBox {...SelectBoxProps} />);
  const errMsg = screen.getByTestId("errormessage");
  expect(errMsg).toBeInTheDocument();
});

test("selectbox errormessage visibility test", () => {
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const SelectBoxProps = {
    selectboxObject: selectBox_test_whatIs2Add2,
    onChange: jest.fn(),
  };
  render(<W12MSelectBox {...SelectBoxProps} />);
  const errMsg = screen.getByTestId("errormessage");
  expect(errMsg).toHaveProperty("hidden", true);
});
