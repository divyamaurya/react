import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="divya" btnText="Click Me" />
      <Card username="nimmi" />
    </>
  );
}

export default App;
