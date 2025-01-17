import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { addIncome, addExpense, clearData } from '../store/store'

const LocalStorageInitializer = () => {
  const [income, setIncome] = useLocalStorage('income', [])
  const [expenses, setExpenses] = useLocalStorage('expenses', [])
  const dispatch = useDispatch()

  useEffect(() => {
    // Load income into Redux store
    income.forEach((item) => dispatch(addIncome(item)))
    // Load expenses into Redux store
    expenses.forEach((item) => dispatch(addExpense(item)))
  }, [dispatch, income, expenses])

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all data?')) {
      setIncome([])
      setExpenses([])
      dispatch(clearData())
    }
  }

  return (
    <div className='clear-data'>
      <button
        onClick={handleClearData}
        className='clear'
      >
        Clear All Data
      </button>
    </div>
  )
}

export default LocalStorageInitializer
