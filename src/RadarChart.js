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
        label: "Radar Chart",
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
        angleLines: { display: true }, // Lignes radiales visibles
        grid: { color: "rgba(0, 0, 0, 0.1)" }, // Couleur des lignes
        suggestedMin: 0, // Minimum de l'échelle
        suggestedMax: 5, // Maximum de l'échelle
        ticks: {
          stepSize: 1, // Incrémentation par 1
          display: true,
          color: "rgba(0, 0, 0, 0.8)", // Couleur des graduations
          backdropColor: "transparent", // Fond transparent
        },
        pointLabels: {
          color: "rgba(0, 0, 0, 0.8)", // Couleur des labels de catégorie
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "rgba(0, 0, 0, 0.8)", // Couleur de la légende
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      {" "}
      {/* Dimensions ajustées */}
      <Radar data={radarData} options={options} />
    </div>
  );
};

export default RadarChart;
