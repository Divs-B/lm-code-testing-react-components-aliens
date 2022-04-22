import { render, screen } from "@testing-library/react";

import W12MTextAreaBox from "./W12MTextAreaBox";

test("to see if textareabox render properly", () => {
  const textAreaBox_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    onChangeTextAreaBox: jest.fn(),
  };
  render(<W12MTextAreaBox {...textAreaBox_reasonForSparing} />);
  const textBoxType = screen.getByTestId("reasonForSparing");
  expect(textBoxType).toBeInTheDocument();
});
