import TodoItemComponent from "./TodoItem.component/TodoItemComponent";
import "./AllTodosComponent.css"
interface Task {
    id: number;
    title: string;
    isUrgent: boolean;
    isCompleted: boolean;
}
interface IProps{
  tasks: Task[];
  toggleCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const AllTodosComponent= (props :IProps) => {
    return (
        <div className="all-todos">
          {props.tasks.map(task => (
            <TodoItemComponent
              key={task.id}
              task={task}
              toggleCompletion={props.toggleCompletion}
              deleteTask={props.deleteTask}
            />
          ))}
        </div>
      );
}

export default AllTodosComponent;