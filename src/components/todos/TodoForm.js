import Button from "../UI/Button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css'


function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState("");


  const formHandler = (event) => {
    event.preventDefault();
		
		const todo = {
			id: uuidv4(),
			text: todoText,
			isCompleted: false
		}
		todoText && addTodo(todo)
		setTodoText("")
  };

  return (
    <form className={styles.form} onSubmit={formHandler}>
      <input
				className={styles.input}
        type="text"
        name="todo"
        placeholder="Enter some text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm