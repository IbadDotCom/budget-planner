import React from 'react'

const BudgetOverview = ({ totalIncome, totalExpenses, remainingBalance }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Budget Overview</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining Balance: ${remainingBalance}</p>
    </div>
  )
}

export default BudgetOverview
