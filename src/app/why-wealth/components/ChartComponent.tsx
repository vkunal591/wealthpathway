"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["2020", "2021", "2022", "2023", "2024"],
  datasets: [
    {
      label: "Traditional",
      data: [6, 3, 5, 4, 7],
      backgroundColor: "rgba(10, 43, 88, 0.4)",  // semi-transparent navy
      borderColor: "rgba(10, 43, 88, 0.7)",   
      borderWidth: 1,
      barPercentage: 0.9,
      categoryPercentage: 1.0,
    },
    {
      label: "Wealth1",
      data: [9, 7, 11, 9, 13],
      backgroundColor: "rgba(178, 140, 61, 0.4)",
      borderColor: "rgba(178, 140, 61, 0.7)",
      borderWidth: 1,
      barPercentage: 0.9,
      categoryPercentage: 1.0,
    },
  ],
};

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 6,
      },
    },
    x: {
      stacked: false,
    },
  },
};

const ChartComponent: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
