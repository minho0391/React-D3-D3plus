import "./App.css";
import LineChart from "./components/LineChart";
import { BarChart } from "@d3plus/react";

function App() {
  const data = [10, 20, 35, 18, 42, 30, 55];
  const barData = [
    { id: "alpha", x: 4, y: 7 },
    { id: "alpha", x: 5, y: 25 },
    { id: "alpha", x: 6, y: 13 },
    { id: "beta", x: 4, y: 17 },
    { id: "beta", x: 5, y: 8 },
    { id: "beta", x: 6, y: 13 },
  ];

  const barConfig = {
    data: barData,
    groupBy: "id",
    x: "x",
    y: "y",
  };
  return (
    <>
      <h1>D3 chart</h1>
      <LineChart data={data} />
      <BarChart config={barConfig} />
    </>
  );
}

export default App;
