import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import NavBar from "./layout/NavBar";
import './Global.css';
import './responsive.css';
import Wolletdashboard from "./pages/Wolletdashboard/Wolletdashboard";



function App() {
  return (
    <div className={"App"}>
        <Router>
            <header className="navHeader">
                <NavBar/>
            </header>
            <Switch>
                <Route exact path={"/"} component={Wolletdashboard}/>
                
            </Switch>
        </Router>
    </div>
  );
}

export default App;
