"use client";
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import necessary components

import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend); // Register the components

interface DoughnutChartProps {
  accounts: number[]; // Adjust according to your actual props structure
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ['Account 1', 'Account 2', 'Account 3'], // Add labels for each section
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  };

  return (
    <Doughnut data={data} options={{
        cutout: "60%",
        plugins: {
            legend: {
                display: false
            }
        }
    }}/> 
  );
};

export default DoughnutChart;
