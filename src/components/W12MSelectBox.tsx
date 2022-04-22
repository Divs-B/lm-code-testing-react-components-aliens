interface SelectBoxProps {
  id: string;
  title: string;
  option1: string;
  option2: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  id,
  title,
  option1,
  option2,
  onChange,
}) => {
  return (
    <div>
      <label className="form-control" htmlFor={id}>
        {title}
      </label>
      <select className="form-control" data-testid={id} onChange={onChange}>
        <option selected>{option1}</option>
        <option>{option2}</option>
        required
      </select>
    </div>
  );
};

export default SelectBox;
