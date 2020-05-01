import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css';
import ReactBootstrapTest from './pages/ReactBootstrapTest';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './Navbar';
import NotFoundPage from './pages/NotFound';

function App() {

  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="panel panel-default">
        <div className="panel-body">
          <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/bootstrap" component={ReactBootstrapTest} exact/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/articles-list" component={ArticleListPage}/>
          <Route path="/article/:name" component={ArticlePage}/>
          {/* page not found is only shown when the rest are messed up */}
          <Route component={NotFoundPage} />
          </Switch>

        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
