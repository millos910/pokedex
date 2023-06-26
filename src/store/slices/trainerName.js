import { createSlice } from '@reduxjs/toolkit';

const trainerNameSlice = createSlice({
  name: 'trainerName',
  initialState: '',
  reducers: {
    setTrainerNameG: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTrainerNameG } = trainerNameSlice.actions;

export default trainerNameSlice.reducer;
