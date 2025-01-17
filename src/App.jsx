import { useSelector, useDispatch } from 'react-redux'
import IncomeForm from './components/IncomeForm'
import ExpenseForm from './components/ExpenseForm'
import BudgetOverview from './components/BudgetOverview'
import ExpenseBreakdownChart from './components/ExpenseBreakdownChart'
import LocalStorageInitializer from './components/LocalStorageInitializer'

const App = () => {
  const budget = useSelector((state) => state.budget)

  const totalIncome = budget.income.reduce((sum, inc) => sum + inc.amount, 0)
  const totalExpenses = budget.expenses.reduce((sum, exp) => sum + exp.amount, 0)
  const remainingBalance = totalIncome - totalExpenses

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center">Budget Planner</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <IncomeForm />
          <ExpenseForm />
        </div>
        <BudgetOverview
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          remainingBalance={remainingBalance}
        />
        {/* Initialize Local Storage Data */}
        <LocalStorageInitializer />
        <ExpenseBreakdownChart expenses={budget.expenses} />
      </div>
    </div>
  )
}

export default App
