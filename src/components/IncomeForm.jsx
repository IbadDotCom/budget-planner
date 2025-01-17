import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIncome } from '../store/store'

const IncomeForm = () => {
  const [incomeSource, setIncomeSource] = useState('')
  const [incomeAmount, setIncomeAmount] = useState('')
  const dispatch = useDispatch()

  const handleAddIncome = () => {
    if (incomeSource && incomeAmount) {
      dispatch(addIncome({ source: incomeSource, amount: parseFloat(incomeAmount) }));
      setIncomeSource('')
      setIncomeAmount('')
    }
  }

  return (
    <div className='form'>
      <h2 className="text-lg font-semibold">Add Income</h2>
      <input
        type="text"
        placeholder="Income Source"
        value={incomeSource}
        onChange={(e) => setIncomeSource(e.target.value)}
        className="input w-full mt-2 border rounded p-2"
      />
      <input
        type="number"
        placeholder="Income Amount"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
        className="input w-full mt-2 border rounded p-2"
      />
      <button
        onClick={handleAddIncome}
        className="button mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Income
      </button>
    </div>
  )
}

export default IncomeForm
