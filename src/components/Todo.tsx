import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const addTodo = (): void => {
    if (todo.trim() === "") {
      setErrorMessage("The todo field cannot be empty.");
    } else {
      setTasks([...tasks, todo]);
      setTodo("");
      setErrorMessage(null);
    }
  };

  return (
    <>
      <div>
        <h1>Todo</h1>
      </div>
      <input
        placeholder="Create a Todo "
        value={todo}
        name="myTodo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
