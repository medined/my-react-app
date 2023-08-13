import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute path="/logout" component={Logout} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;