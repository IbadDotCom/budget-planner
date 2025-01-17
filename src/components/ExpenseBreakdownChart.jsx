import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

// Register necessary Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend)

const ExpenseBreakdownChart = ({ expenses }) => {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const categories = expenses.map((exp) => exp.category)
    const amounts = expenses.map((exp) => exp.amount)
    setChartData({
      labels: categories,
      datasets: [
        {
          data: amounts,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
      ],
    })
  }, [expenses])

  if (!chartData) return <div>Loading chart...</div>

  return (
    <div className="chart">
      <Pie data={chartData} />
    </div>
  )
}

export default ExpenseBreakdownChart
