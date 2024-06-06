import { useState } from "react";
import "./App.css";
import ListTodo from "./components/ListTodo";
import Todo from "./components/Todo";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddtodo = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <div>
        <Todo onAddTask={handleAddtodo} />
        <ListTodo tasks={tasks} />
      </div>
    </>
  );
};

export default App;
