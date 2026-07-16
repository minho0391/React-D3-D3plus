import "./App.css";
import LineChart from "./components/LineChart";

function App() {
  const data = [10, 20, 35, 18, 42, 30, 55];
  return (
    <>
      <h1>D3 chart</h1>
      <LineChart data={data} />
    </>
  );
}

export default App;
