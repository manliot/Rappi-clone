import './App.css';
import { Navbar } from "./views/Navbar";
import { PrincipalContent } from "./views/PrincipalContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PrincipalContent/>
    </div>
  );
}

export default App;
