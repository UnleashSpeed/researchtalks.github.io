import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tutorial from './pages/Tutorial';
import Query from './pages/Query';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/query/:id" component={Query} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;