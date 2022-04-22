import { render, screen } from "@testing-library/react";
import W12MSelectBox from "./W12MSelectBox";

test("to see if selectbox render properly", () => {
  const selectBox_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    onChangeSelectBox: jest.fn(),
  };
  render(<W12MSelectBox {...selectBox_whatIs2Add2} />);
  const selectBoxId = screen.getByTestId("whatIs2Add2");
  expect(selectBoxId).toBeInTheDocument();
});
