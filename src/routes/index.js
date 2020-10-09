import React from 'react';
import history from '../history';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const PrivateRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={(innerProps) =>
          sessionStorage.getItem('authToken') ? (
            <Component {...innerProps} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          )
        }
      />
    );
  };
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route
          path="*"
          render={() => <h1 style={{ color: 'white' }}>Page Not Found</h1>}
        />
      </Switch>
    </Router>
  );
}

export default App;
