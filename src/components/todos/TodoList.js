import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, setCompletedTodo }) {
  return (
    <div className={styles.todos}>
      {!!todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            setCompletedTodo={setCompletedTodo}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default TodoList;
