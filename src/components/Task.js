import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h5>
        {task.text}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h5>
      <h6>{task.day}</h6>
    </div>
  );
};

export default Task;
