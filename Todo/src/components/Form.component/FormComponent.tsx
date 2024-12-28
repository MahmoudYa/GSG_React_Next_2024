import { useState } from 'react';
import './FormComponent.css'

interface IProps{
    addTask: (title: string, isUrgent: boolean) => void;
}

const FormComponent= (props :IProps) => {
    const [title, setTitle] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (e :any) => {
    e.preventDefault();
    if (title.trim() === '') return;
    props.addTask(title, isUrgent);
    setTitle('');
    setIsUrgent(false);
  };

  return (
    <form onSubmit={handleSubmit} className='Form'>
      <div>
        <input className='Todo'
            type="text"
            placeholder="Type Todo here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className='mark'>
            <input
            type="checkbox"
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
            />
            Mark as Urgent
        </label>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );

}

export default FormComponent;