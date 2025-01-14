import { IStudent } from '../types';

export const ACTIONS = {
  ADD_STUDENT: 'add-student',
  REMOVE_FIRST: 'remove-first',
  UPDATE_ABSENT: 'update-absent',
  SET_STUDENTS: 'set-students',
};

export const studentsReducer = (state: { studentsList: IStudent[]; totalAbsents: number }, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_STUDENTS:
      const totalAbsents = action.payload.reduce((prev: number, cur: IStudent) => prev + cur.absents, 0);
      return { studentsList: action.payload, totalAbsents };

    case ACTIONS.ADD_STUDENT:
      return {
        studentsList: [action.payload, ...state.studentsList],
        totalAbsents: state.totalAbsents,
      };

    case ACTIONS.REMOVE_FIRST:
      const updatedList = [...state.studentsList];
      updatedList.shift();
      return {
        studentsList: updatedList,
        totalAbsents: state.totalAbsents,
      };

    case ACTIONS.UPDATE_ABSENT:
      const { id, change } = action.payload;
      const newStudentsList = state.studentsList.map((std) =>
        std.id === id ? { ...std, absents: std.absents + change } : std
      );
      return {
        studentsList: newStudentsList,
        totalAbsents: state.totalAbsents + change,
      };

    default:
      return state;
  }
};
