import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
interface ListTodoProps {
  tasks: { id: number; text: string; completed: boolean; createdAt: Date }[];
  handleToggle: (taskId: number) => void;
  handleDelete: (taskId: number) => void;
}

const ListTodo: React.FC<ListTodoProps> = ({
  tasks,
  handleToggle,
  handleDelete,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${task.completed} ? 'completed'': ''`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <span className={`task-name ${task.completed ? "completed" : ""}`}>
            {task.text}
          </span>

          <span className="created-at">
            Created at: {task.createdAt.toLocaleString()}
          </span>
          <button
            onClick={() => handleDelete(task.id)}
            className="delete-button"
          >
            {" "}
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
