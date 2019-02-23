import React from "react";
import Index from './Index';
import Queue from './Queue/Queue';
import NewSession from './NewSession';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/newSession/" component={NewSession} />
      <Route path="/session/:sessionId" component={Queue} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;