import "./App.css";
import Router from "./Router";
import "./styles/main.scss";
import DataContextProvider from "./hooks/useData";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Router></Router>
      </DataContextProvider>
    </div>
  );
}

export default App;
