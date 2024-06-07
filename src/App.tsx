import { useState } from "react";
import "./App.css";
import ListTodo from "./components/ListTodo";
import Todo from "./components/Todo";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextTaskId, SetNextTaskId] = useState<number>(1);

  const handleAddtodo = (taskText: string) => {
    const newTask: Task = {
      id: nextTaskId,
      text: taskText,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    SetNextTaskId(nextTaskId + 1);
  };

  const handleToggle = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskID: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div>
        <Todo onAddTask={handleAddtodo} />
        <ListTodo
          tasks={tasks}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default App;
