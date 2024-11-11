import { PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '@/types/Task';
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as TaskType[],
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      console.log('Adding task:', action.payload);
      state.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      console.log('Removing task with id:', action.payload);
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;

