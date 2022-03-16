import Home from './component/Home';
import Information from './component/Information';
import Capital from './component/Capital';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  //@ts-ignore
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/information" component={Information}/>
        <Route  path="/capital" component={Capital}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
