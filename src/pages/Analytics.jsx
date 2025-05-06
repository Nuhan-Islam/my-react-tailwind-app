import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

function Analytics() {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 500, 400, 600, 700],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['New Users', 'Returning Users'],
    datasets: [
      {
        label: 'User Distribution',
        data: [65, 35],
        backgroundColor: ['rgba(34, 197, 94, 0.5)', 'rgba(249, 115, 22, 0.5)'],
        borderColor: ['rgba(34, 197, 94, 1)', 'rgba(249, 115, 22, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-6 border-1 rounded-3xl p-5 mt-10 w-full">
      <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Sales Over Time</h2>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">User Distribution</h2>
          <Pie data={pieData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;