import { fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";

test("form render test", () => {
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
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
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };

  const allTextBoxes = [
    textBox_test_speciesName,
    textBox_test_planetName,
    textBox_test_numberOfBeings,
  ];
  const allSelectBoxes = [selectBox_test_whatIs2Add2];
  const allTextAreaBoxes = [textAreaBox_test_reasonForSparing];

  const { container } = render(
    <W12MForm
      allTextBoxes={allTextBoxes}
      allSelectBoxes={allSelectBoxes}
      allTextAreaBoxes={allTextAreaBoxes}
    />
  );

  expect(container.firstChild).toHaveClass("w12MForm");
  expect(screen.getByTestId("w12MForm")).toBeInTheDocument();
});

test("submit button working test", () => {
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
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };

  const allTextBoxes = [
    textBox_test_speciesName,
    textBox_test_planetName,
    textBox_test_numberOfBeings,
  ];
  const allSelectBoxes = [selectBox_test_whatIs2Add2];
  const allTextAreaBoxes = [textAreaBox_test_reasonForSparing];

  const { container } = render(
    <W12MForm
      allTextBoxes={allTextBoxes}
      allSelectBoxes={allSelectBoxes}
      allTextAreaBoxes={allTextAreaBoxes}
    />
  );
  const form = screen.getByTestId("w12MForm");
  const speciesNameInput = screen.getByTestId("speciesName");
  fireEvent.change(speciesNameInput, {
    target: { value: "genius alien" },
  });
  const planetNameInput = screen.getByTestId("planetName");
  fireEvent.change(planetNameInput, {
    target: { value: "super planet" },
  });
  const numberOfBeingsInput = screen.getByTestId("numberOfBeings");
  fireEvent.change(numberOfBeingsInput, {
    target: { value: "1000000000" },
  });
  const whatIs2Add2Input = screen.getByTestId("whatIs2Add2");
  fireEvent.change(whatIs2Add2Input, {
    target: { value: "4" },
  });
  const reasonForSparingInput = screen.getByTestId("reasonForSparing");
  fireEvent.change(reasonForSparingInput, {
    target: { value: "hjfgdsadfkdsfyedhdh" },
  });
  fireEvent.submit(form);

  expect(screen.getByTestId("data-onsubmit")).toContainHTML(
    "genius aliensuper planet10000000004hjfgdsadfkdsfyedhdh"
  );
});

test("invalid pattern test on one of a random field", () => {
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
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };

  const allTextBoxes = [
    textBox_test_speciesName,
    textBox_test_planetName,
    textBox_test_numberOfBeings,
  ];
  const allSelectBoxes = [selectBox_test_whatIs2Add2];
  const allTextAreaBoxes = [textAreaBox_test_reasonForSparing];

  const { container } = render(
    <W12MForm
      allTextBoxes={allTextBoxes}
      allSelectBoxes={allSelectBoxes}
      allTextAreaBoxes={allTextAreaBoxes}
    />
  );
  const form = screen.getByTestId("w12MForm");
  const speciesNameInput = screen.getByTestId("speciesName");
  fireEvent.change(speciesNameInput, {
    target: { value: "genius alien" },
  });
  const planetNameInput = screen.getByTestId("planetName");
  fireEvent.change(planetNameInput, {
    target: { value: "super planet" },
  });
  const numberOfBeingsInput = screen.getByTestId("numberOfBeings");
  fireEvent.change(numberOfBeingsInput, {
    target: { value: "£$£$£" },
  });
  const whatIs2Add2Input = screen.getByTestId("whatIs2Add2");
  fireEvent.change(whatIs2Add2Input, {
    target: { value: "4" },
  });
  const reasonForSparingInput = screen.getByTestId("reasonForSparing");
  fireEvent.change(reasonForSparingInput, {
    target: { value: "hjfgdsadfkdsfyedhdh" },
  });
  fireEvent.submit(form);

  expect(
    screen.getAllByTestId("errormessage")[2]
  ).toBeVisible(); /*Error on field numberofbeings is visible*/
});

test("invalid pattern test on all of the 5 fields", () => {
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
  const selectBox_test_whatIs2Add2 = {
    id: "whatIs2Add2",
    title: "What is 2+2",
    option1: "4",
    option2: "Not 4",
    displayError: false,
    errMessage: "Error - Please follow the rules : can not select Not 4",
  };
  const textAreaBox_test_reasonForSparing = {
    id: "reasonForSparing",
    title: "Reason for sparing",
    min: 17,
    max: 153,
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter atleast 17 characters and maximum 153 characters!",
  };

  const allTextBoxes = [
    textBox_test_speciesName,
    textBox_test_planetName,
    textBox_test_numberOfBeings,
  ];
  const allSelectBoxes = [selectBox_test_whatIs2Add2];
  const allTextAreaBoxes = [textAreaBox_test_reasonForSparing];

  const { container } = render(
    <W12MForm
      allTextBoxes={allTextBoxes}
      allSelectBoxes={allSelectBoxes}
      allTextAreaBoxes={allTextAreaBoxes}
    />
  );
  const form = screen.getByTestId("w12MForm");
  const speciesNameInput = screen.getByTestId("speciesName");
  fireEvent.change(speciesNameInput, {
    target: { value: "324324342" },
  });
  const planetNameInput = screen.getByTestId("planetName");
  fireEvent.change(planetNameInput, {
    target: { value: "&^%$" },
  });
  const numberOfBeingsInput = screen.getByTestId("numberOfBeings");
  fireEvent.change(numberOfBeingsInput, {
    target: { value: "saasfasfsaf" },
  });
  const whatIs2Add2Input = screen.getByTestId("whatIs2Add2");
  fireEvent.change(whatIs2Add2Input, {
    target: { value: "Not 4" },
  });
  const reasonForSparingInput = screen.getByTestId("reasonForSparing");
  fireEvent.change(reasonForSparingInput, {
    target: { value: "hjfgdsad" },
  });
  fireEvent.submit(form);

  const allFiveFieldsErrMessages = screen.queryAllByText(/Error - /i);
  expect(allFiveFieldsErrMessages).toHaveLength(5);
});
