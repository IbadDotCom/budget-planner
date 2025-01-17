import { createSlice, configureStore } from '@reduxjs/toolkit'

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    income: [],
    expenses: [],
  },
  reducers: {
    addIncome: (state, action) => {
      state.income.push(action.payload)
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload)
    },
    clearData: (state) => {
      state.income = []
      state.expenses = []
    },
  },
})

export const { addIncome, addExpense, clearData } = budgetSlice.actions;

const store = configureStore({
  reducer: {
    budget: budgetSlice.reducer,
  },
})

export default store
