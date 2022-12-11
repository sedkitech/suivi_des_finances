import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//components and pages
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/"  >
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login"  >
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/signup"  >
              {user ? <Redirect to="/" /> : <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}

    </div>
  );
}

export default App;
