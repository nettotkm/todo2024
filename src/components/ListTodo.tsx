interface ListTodoProps {
  tasks: string[];
}

const ListTodo: React.FC<ListTodoProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default ListTodo;
