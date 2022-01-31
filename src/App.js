import "./App.scss";
import Topic from "./components/Topic/Topic";
import TipCalculator from "./components/TipCalculator/TipCalculator";

function App() {
    return (
        <main className="App">
            <Topic />
            <div className="padding"></div>
            <TipCalculator />
        </main>
    );
}

export default App;
