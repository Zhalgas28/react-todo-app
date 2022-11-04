import { GrPowerReset } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Button from "../UI/Button";
import styles from "./Actions.module.css";

function Actions({ resetTodos, deleteCompletedTodos, completedTodosExists }) {
  return (
    <div className={styles.actions}>
      <Button title="Reset todo list" onClick={resetTodos}>
        <GrPowerReset className={styles.reset} />
      </Button>
      <Button
        title="Delete completed todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExists}
      >
        <MdDelete className={styles.delete} />
      </Button>
    </div>
  );
}

export default Actions;
