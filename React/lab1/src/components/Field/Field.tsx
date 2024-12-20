import { FieldProps } from "../../types/field/field.Types";
import FieldBox from "../FieldBox/FieldBox";

function Field(props: FieldProps) {
  const fieldSize = props.size;
  const field = Array.from({length: fieldSize,}, (_, row) => (
    Array.from({length: fieldSize,}, (_, col) => ({
      row,
      col,
    }))
  ));
  
  return (
    <div>
      {field.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((_, colIndex) => (
            <FieldBox key={colIndex} size={fieldSize} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Field
