import { FieldBoxProps } from "../../types/fieldBox/fieldBoxTypes";
import Cell from "../Cell/Cell";
import classes from './field-box.module.sass';

function FieldBox(props: FieldBoxProps) {
  const fieldBoxSize = props.size;
  const fieldBox = Array.from({length: fieldBoxSize,}, (_, row) => (
    Array.from({length: fieldBoxSize,}, (_, col) => ({
      row,
      col,
    }))
  ));
  
  return (
    <div className={classes.fieldBox}>
      {fieldBox.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((_, colIndex) => (
            <Cell key={colIndex}/>
          ))}
        </div>
      ))}
    </div>
  )
}

export default FieldBox
