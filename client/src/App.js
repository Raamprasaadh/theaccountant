import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from "./components/navBarComponent";
import ViewRecords from "./components/viewRecordsComponent";
import AddRecords from "./components/addRecordsComponent";
import Login from "./components/loginComponent";
import Signup from "./components/sigupComponent";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/viewrcrds" component={ViewRecords} />
        <Route path="/addrcrds" component={AddRecords} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
