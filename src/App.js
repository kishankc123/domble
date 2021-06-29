import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Body from "./components/Body";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Body />
      <Info />
    </div>
  );
}

export default App;
