// import { useState } from "react"
// import { Chart, registerables } from "chart.js"
// import { Pie } from "react-chartjs-2"

// Chart.register(...registerables)

// export default function InstructorChart({ courses }) {
//   // State to keep track of the currently selected chart
//   const [currChart, setCurrChart] = useState("students")

//   // Function to generate random colors for the chart
//   const generateRandomColors = (numColors) => {
//     const colors = []
//     for (let i = 0; i < numColors; i++) {
//       const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
//         Math.random() * 256
//       )}, ${Math.floor(Math.random() * 256)})`
//       colors.push(color)
//     }
//     return colors
//   }

//   // Data for the chart displaying student information
//   const chartDataStudents = {
//     labels: courses.map((course) => course.courseName),
//     datasets: [
//       {
//         data: courses.map((course) => course.totalStudentsEnrolled),
//         backgroundColor: generateRandomColors(courses.length),
//       },
//     ],
//   }

//   // Data for the chart displaying income information
//   const chartIncomeData = {
//     labels: courses.map((course) => course.courseName),
//     datasets: [
//       {
//         data: courses.map((course) => course.totalAmountGenerated),
//         backgroundColor: generateRandomColors(courses.length),
//       },
//     ],
//   }

//   // Options for the chart
//   const options = {
//     maintainAspectRatio: false,
//   }

//   return (
//     <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
//       <p className="text-lg font-bold text-richblack-5">Visualize</p>
//       <div className="space-x-4 font-semibold">
//         {/* Button to switch to the "students" chart */}
//         <button
//           onClick={() => setCurrChart("students")}
//           className={`rounded-sm p-1 px-3 transition-all duration-200 ${
//             currChart === "students"
//               ? "bg-richblack-700 text-yellow-50"
//               : "text-yellow-400"
//           }`}
//         >
//           Students
//         </button>
//         {/* Button to switch to the "income" chart */}
//         <button
//           onClick={() => setCurrChart("income")}
//           className={`rounded-sm p-1 px-3 transition-all duration-200 ${
//             currChart === "income"
//               ? "bg-richblack-700 text-yellow-50"
//               : "text-yellow-400"
//           }`}
//         >
//           Income
//         </button>
//       </div>
//       <div className="relative mx-auto aspect-square h-[75%] w-full">
//         {/* Render the Pie chart based on the selected chart */}
//         <Pie
//           data={currChart === "students" ? chartDataStudents : chartIncomeData}
//           options={options}
//         />
//       </div>
//     </div>
//   )
// }






















import { useState } from "react"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(...registerables)

export default function InstructorChart({ courses }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("students")
  
  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = []
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
      colors.push(color)
    }
    return colors
  }
  
  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  }
  
  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  }
  
  // Options for the chart with responsive configuration
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        }
      },
      tooltip: {
        titleFont: {
          size: window.innerWidth < 768 ? 12 : 14
        },
        bodyFont: {
          size: window.innerWidth < 768 ? 11 : 13
        },
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return currChart === 'income' ? `Rs. ${value}` : `${value} students`;
          }
        }
      }
    }
  }
  
  return (
    <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-gray-200 p-4 md:p-6 h-full">
      <p className="text-base md:text-lg font-bold text-gray-800">Visualize</p>
      
      <div className="flex flex-wrap gap-2 sm:gap-4 font-semibold">
        {/* Button to switch to the "students" chart */}
        <button
          onClick={() => setCurrChart("students")}
          className={`rounded-sm p-1 px-2 md:px-3 transition-all duration-200 text-sm md:text-base ${
            currChart === "students"
              ? "bg-gray-300 text-blue-600"
              : "text-blue-500"
          }`}
        >
          Students
        </button>
        {/* Button to switch to the "income" chart */}
        <button
          onClick={() => setCurrChart("income")}
          className={`rounded-sm p-1 px-2 md:px-3 transition-all duration-200 text-sm md:text-base ${
            currChart === "income"
              ? "bg-gray-300 text-blue-600"
              : "text-blue-500"
          }`}
        >
          Income
        </button>
      </div>
      
      <div className="relative mx-auto h-40 sm:h-48 md:h-56 lg:h-64 w-full max-w-md">
        {/* Render the Pie chart based on the selected chart */}
        <Pie
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
      
      {/* Mobile view legend explanation */}
      <div className="mt-2 text-xs text-gray-600 block sm:hidden">
        <p>Tap on legend items to show/hide data</p>
      </div>
    </div>
  )
}