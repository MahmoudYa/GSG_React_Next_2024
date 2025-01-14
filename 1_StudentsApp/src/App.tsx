import './App.css';
import Main from './screens/Main.screen';
import About from './screens/About.screen';
import NotFound from './screens/NotFound.screen';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import StudentDetails from './screens/StudentDetails.screen';
import { useReducer, useEffect } from 'react';
import useLocalStorage from './hooks/local-storage.hook';
import { IStudent } from './types';
import AddStudent from './screens/AddStudent.screen';
import { studentsReducer, ACTIONS } from './states/studentsReducer';

function App() {
  const h1Style = { color: '#69247C', fontSize: '24px' };

  const [state, dispatch] = useReducer(studentsReducer, {
    studentsList: [],
    totalAbsents: 0,
  });

  const location = useLocation();
  const { storedData } = useLocalStorage(state.studentsList, 'students-list');

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    dispatch({ type: ACTIONS.SET_STUDENTS, payload: stdList });
  }, [storedData]);

  const handleAddStudent = (newStudent: IStudent) => {
    dispatch({ type: ACTIONS.ADD_STUDENT, payload: newStudent });
  };

  const removeFirst = () => {
    dispatch({ type: ACTIONS.REMOVE_FIRST });
  };

  const handleAbsentChange = (id: string, change: number) => {
    dispatch({ type: ACTIONS.UPDATE_ABSENT, payload: { id, change } });
  };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home Page
        </Link>
        <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>
          Add Student
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About App
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              studentsList={state.studentsList}
              totalAbsents={state.totalAbsents}
              onAbsent={handleAbsentChange}
              onRemove={removeFirst}
            />
          }
        />
        <Route path="/add" element={<AddStudent onAdd={handleAddStudent} />} />
        <Route path="/about" element={<About />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
