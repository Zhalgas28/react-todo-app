import styles from "./Todo.module.css";
import { RiTodoFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BsCheckLg } from 'react-icons/bs'

function Todo(props) {
  const { text, deleteTodo, setCompletedTodo, id, isCompleted } = props;
  return (
    <div className={`${styles.todo} ${isCompleted ? styles.completedTodo : ""}`}>
      <RiTodoFill className={styles.icon} />
      <div className={styles.todoText}>{text}</div>
			<MdDelete onClick={() => deleteTodo(id)} className={styles.delete}/>
			<BsCheckLg onClick={() => setCompletedTodo(id)} className={styles.checkMark} />
    </div>
  );
}

export default Todo;
