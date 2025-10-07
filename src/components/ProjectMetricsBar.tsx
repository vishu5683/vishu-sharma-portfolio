'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Box, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const projectData = {
  labels: ['Logistics Platform', 'Analytics Dashboard', 'EdTech App', 'HRMS Dashboard'],
  datasets: [
    {
      label: 'Performance Improvement (%)',
      data: [35, 25, 40, 30],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(192, 38, 211, 0.8)',
        'rgba(16, 185, 129, 0.8)',
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(192, 38, 211, 1)',
        'rgba(16, 185, 129, 1)',
      ],
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 1,
      callbacks: {
        label: function(context: any) {
          return `${context.parsed.y}% Performance Improvement`
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(0, 0, 0, 0.7)',
        font: {
          size: 12,
          weight: '600' as const,
        },
      },
    },
    y: {
      beginAtZero: true,
      max: 50,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      ticks: {
        color: 'rgba(0, 0, 0, 0.7)',
        font: {
          size: 12,
        },
        callback: function(value: any) {
          return value + '%'
        },
      },
    },
  },
}

export default function ProjectMetricsBar() {
  const theme = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Box
        sx={{
          height: 300,
          width: '100%',
          position: 'relative',
          '& canvas': {
            borderRadius: 20,
          },
        }}
      >
        <Bar data={projectData} options={options} />
      </Box>
    </motion.div>
  )
}
