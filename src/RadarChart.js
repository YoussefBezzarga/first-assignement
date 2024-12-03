import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "./styles.css"; // Assurez-vous d'utiliser ce fichier pour les styles globaux

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ data }) => {
  const radarData = {
    labels: data.map((item) => item.category), // Catégories pour chaque axe
    datasets: [
      {
        label: "Auto Évaluation X-SQUAD",
        data: data.map((item) => item.value), // Valeurs pour chaque catégorie
        backgroundColor: "rgba(255, 165, 0, 0.3)", // Couleur orange clair
        borderColor: "rgba(255, 140, 0, 1)", // Couleur orange plus foncé
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { display: true },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          display: true,
          color: "rgba(0, 0, 0, 0.8)",
          backdropColor: "transparent",
        },
        pointLabels: {
          color: "rgba(0, 0, 0, 0.8)",
          font: { size: 12 },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: { color: "rgba(0, 0, 0, 0.8)" },
      },
    },
  };

  const handleButtonClick = () => {
    window.location.href = "https://x-squad.com/contact";
  };

  return (
    <div className="chart-container">
      <div style={{ width: "100%", height: "500px" }}>
        <Radar data={radarData} options={options} />
      </div>
      <div className="button-container">
        <button className="custom-button" onClick={handleButtonClick}>
          Aller plus loin...
        </button>
      </div>
    </div>
  );
};

export default RadarChart;
