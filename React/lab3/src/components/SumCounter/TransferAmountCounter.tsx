import { Controller } from "react-hook-form";
import { TransferAmountProps } from "../../types/TransferAmountCounter/TransferAmountCounter";
import styles from './TransferAmountCounter.module.sass';

const TransferAmountCounter = (props: TransferAmountProps) => {
  return (
    <div className={styles.transferAmountCounter}>
      <label className={styles.label}>Сума переказу:</label>
      <Controller
        name="transferAmount"
        control={props.control}
        defaultValue={10}
        render={({ field }) => (
          <div className={styles.inputContainer}>
            <input
              type="number"
              placeholder="Введіть суму"
              className={styles.input}
              {...field}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                field.onChange(isNaN(value) ? 0 : value);
              }}
            />
            <div className={styles.commissionInfo}>
              <span>Комісія:</span>
              <span>{props.countCommission(field.value).commission} грн.</span>
            </div>
            <div className={styles.commissionInfo}>
              <span>До сплати:</span>
              <span>{props.countCommission(field.value).sumWithCommission} грн.</span>
            </div>
          </div>
        )}
      />
      {props.error && <span className={styles.error}>{props.error.message}</span>}
    </div>
  );
};

export default TransferAmountCounter;
