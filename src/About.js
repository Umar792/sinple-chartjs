import React from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";

Chart.register(ArcElement);

const About = () => {
  const data = {
    labels: ["in Stock", "Out of Stock"],
    datasets: [
      {
        backgroundColor: ["green", "red"],
        data: [300, 50],
      },
    ],
  };

  const dataline = {
    labels: [
      "jan",
      "feb",
      "March",
      "Aprail",
      "Jun",
      "July",
      "Agu",
      "Sep",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          1000, 2023, 1300, 1000, 4996, 7445, 3439, 8743, 3000, 2009, 2000,
          2482,
        ],
        backgroundColor: "brown", // Add background color if needed
        label: "Monthly Purchases",
      },
    ],
  };

  // Custom tooltip callback
  const customTooltip = {
    callbacks: {
      label: (context) => {
        const value = context.parsed.y || 0;
        return "$" + value; // Add $ sign before the value
      },
    },
  };

  const barOptions = {
    plugins: {
      tooltip: customTooltip,
    },
  };

  const linedata = {
    labels: ["minmum amount", "max amount"],
    datasets: [
      {
        data: [0, 3000],
        label: "Total Purchae",
      },
    ],
  };

  return (
    <>
      <div style={{ width: "500px", height: "300px", padding: "50px" }}>
        <Doughnut data={data} />
        {/* =============== */}
      </div>
      <div style={{ width: "600px", marginTop: "150px", height: "400px" }}>
        <Bar data={dataline} options={barOptions} />
      </div>
      <div style={{ width: "600px", marginTop: "150px", height: "400px" }}>
        <Line data={dataline} />
      </div>
    </>
  );
};

export default About;
