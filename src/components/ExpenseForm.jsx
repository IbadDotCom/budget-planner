import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../store/store'

const ExpenseForm = () => {
  const [expenseCategory, setExpenseCategory] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const dispatch = useDispatch()

  const handleAddExpense = () => {
    if (expenseCategory.trim() && !isNaN(expenseAmount) && expenseAmount > 0) {
      dispatch(addExpense({ id: Date.now(), category: expenseCategory, amount: parseFloat(expenseAmount) }))
      setExpenseCategory('')
      setExpenseAmount('')
    } else {
      alert('Please enter a valid expense category and amount.')
    }
  }

  return (
    <div className='form'>
      <h2 className="text-lg font-semibold">Add Expense</h2>
      <input
        type="text"
        placeholder="Expense Category"
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
        className="input w-full mt-2 border rounded p-2"
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        className="input w-full mt-2 border rounded p-2"
      />
      <button
        onClick={handleAddExpense}
        className="button mt-2 bg-red-500 text-white px-4 py-2 rounded"
      >
        Add Expense
      </button>
    </div>
  )
}

export default ExpenseForm
