import {useContext} from 'react'
import './App.css';
import LoginPage from './components/Login/LoginPage';
import Headers from './components/Header/Header'
import {useAuth } from './context/auth-context'
import {AuthContext} from './context/auth-context'
import { BrowserRouter as Router,Switch, Route,Redirect} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import UserProfilePage from './components/UserProfile/UserProfilePage';

function App() {
  return (
    <div >
      <Router>
          <Headers/>
          <Switch>
              <Route exact path='/'>
                <LoginPage/>
              </Route>

              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>

              <PrivateRoute path="/user/:userId">
                <UserProfilePage/>  
              </PrivateRoute>
          </Switch>
    </Router>
    </div>
  );
}

export default App;


function PrivateRoute({ children, ...rest }) {
 const auth = useAuth(AuthContext)

  return (
    <Route
      {...rest}
      render={() =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to='/'
          />
        )
      }
    />
  );
}