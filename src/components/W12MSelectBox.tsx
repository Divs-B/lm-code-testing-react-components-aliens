import SelectBoxStructure from "../data/selectbox-struct";

interface SelectBoxProps {
  selectboxObject: SelectBoxStructure;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ selectboxObject, onChange }) => {
  return (
    <div>
      <label className="form-control" htmlFor={selectboxObject.id}>
        {selectboxObject.title}
      </label>
      <select
        className="form-control"
        data-testid={selectboxObject.id}
        onChange={onChange}
      >
        <option selected>{selectboxObject.option1}</option>
        <option>{selectboxObject.option2}</option>
        required
      </select>
      <p
        data-testid="errormessage"
        hidden={!selectboxObject.displayError}
        className="error"
      >
        {selectboxObject.errMessage}
      </p>
    </div>
  );
};

export default SelectBox;
