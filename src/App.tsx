import "./App.css";
import W12MForm from "./components/W12MForm";
import data from "./data/data.json";

function App() {
  const textBox_speciesName = data.textBox_speciesName;
  const textBox_planetName = data.textBox_planetName;
  const textBox_numberOfBeings = data.textBox_numberOfBeings;
  const selectBox_whatIs2Add2 = data.selectBox_whatIs2Add2;
  const textAreaBox_reasonForSparing = data.textAreaBox_reasonForSparing;

  const allTextBoxes = [
    textBox_speciesName,
    textBox_planetName,
    textBox_numberOfBeings,
  ];
  const allSelectBoxes = [selectBox_whatIs2Add2];
  const allTextAreaBoxes = [textAreaBox_reasonForSparing];

  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm
        allTextBoxes={allTextBoxes}
        allSelectBoxes={allSelectBoxes}
        allTextAreaBoxes={allTextAreaBoxes}
      />
    </>
  );
}

export default App;
