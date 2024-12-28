import './TodoDataComponent.css'
interface Task {
    id: number;
    title: string;
    isUrgent: boolean;
    isCompleted: boolean;
  }

interface IProps{
    tasks: Task[];
}

const TodoDataComponent = (props : IProps) => {
    const createdTasks = props.tasks.length;
    const completedTasks = props.tasks.filter(task => task.isCompleted).length;
    const urgentTasks = props.tasks.filter(task => task.isUrgent).length;
  
    return (
      <div className="todo-data">
        <p>Created tasks: {createdTasks}</p>
        <p>Completed tasks: {completedTasks}</p>
        <p>Urgent tasks: {urgentTasks}</p>
      </div>
    );
}
export default TodoDataComponent;