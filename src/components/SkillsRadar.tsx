'use client'

import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { Box, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const skillsData = {
  labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'Cloud', 'Testing'],
  datasets: [
    {
      label: 'Skill Level',
      data: [90, 75, 70, 65, 60, 55],
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 3,
      pointBackgroundColor: 'rgba(99, 102, 241, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      pointHoverBorderWidth: 2,
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
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20,
        color: 'rgba(0, 0, 0, 0.6)',
        font: {
          size: 12,
        },
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      pointLabels: {
        color: 'rgba(0, 0, 0, 0.8)',
        font: {
          size: 14,
          weight: '600' as const,
        },
      },
    },
  },
}

export default function SkillsRadar() {
  const theme = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Box
        sx={{
          height: 400,
          width: '100%',
          position: 'relative',
          '& canvas': {
            borderRadius: 20,
          },
        }}
      >
        <Radar data={skillsData} options={options} />
      </Box>
    </motion.div>
  )
}
