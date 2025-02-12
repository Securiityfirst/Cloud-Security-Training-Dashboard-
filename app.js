import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TrainingModule from './pages/TrainingModule';
import UserProfile from './pages/UserProfile';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/module/:id" component={TrainingModule} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
