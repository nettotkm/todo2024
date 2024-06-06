import { useState } from "react";

interface TodoProps {
  onAddTask: (task: string) => void;
}

const Todo: React.FC<TodoProps> = ({ onAddTask }) => {
  const [todo, setTodo] = useState<string>("");
  const [error, setError] = useState<string>();

  const addTodo = (): void => {
    console.log("aqui");
    if (todo.trim() === "") {
      setError("Please enter a task.");
      return;
    }

    onAddTask(todo);
    setTodo("");
    setError("");
  };

  return (
    <>
      <div>
        <h1>Todo</h1>
      </div>
      <input
        type="text"
        placeholder="Create a Todo "
        value={todo}
        name="myTodo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Todo;
