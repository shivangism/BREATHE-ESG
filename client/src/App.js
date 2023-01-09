import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/components/Styles/Login.css';
import '../src/components/Dashboard/dashboard.css';
import '../src/components/Styles/Nav.css';
import Login from './components/login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import SignUp from './components/login/SignUp'
import { history } from './components/helpers/history';
import{BrowserRouter as Router,Route,Routes as Switch} from 'react-router-dom';
import RouteGuard from "./components/RouteGuard"


function App() {
  return (
   
    <div className="App" >
       <Router  history={history}>
        <Switch>
          <Route exact path='/' element={<RouteGuard/>}>
            <Route exact path='/' element={<Dashboard/>}/>
          </Route>
          
          {/* <Route exact path='/' element={<Dashboard/>}/> */}

          <Route exact path='/login' element={<Login/>} />

          <Route exact path='/signup' element={<SignUp/>} />

          </Switch>
      </Router>
    </div>
  );
}

export default App;
