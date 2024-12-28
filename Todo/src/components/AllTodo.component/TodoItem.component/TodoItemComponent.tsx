import "./TodoItemComponent.css"

interface Task {
    id: number;
    title: string;
    isUrgent: boolean;
    isCompleted: boolean;
}

interface IProps{
  task: Task;
  toggleCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoItemComponent = (props : IProps) =>{
    return (
        <div className="Todo-item">
          <input
            type="checkbox"
            checked={props.task.isCompleted || props.task.isUrgent}
            onChange={() => props.toggleCompletion(props.task.id)}
          />
          <span >{props.task.title}</span>
          <button className="btn" onClick={() => props.deleteTask(props.task.id)}>🗑️</button>
        </div>
      );
}
export default TodoItemComponent;