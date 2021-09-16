import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import NavBar from "./layout/NavBar";
import './Global.css';
import './responsive.css';
import Volletdashboard from "./pages/Volletdashboard/Volletdashboard";



function App() {
  return (
    <div className={"App"}>
        <Router>
            <header className="navHeader">
                <NavBar/>
            </header>
            <Switch>
                <Route exact path={"/"} component={Volletdashboard}/>
                
            </Switch>
        </Router>
    </div>
  );
}

export default App;
