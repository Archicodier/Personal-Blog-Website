import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Project from './Project/Project.jsx';
import Blog from './Blog/Blog.jsx';

const Nav = () => {
  const divider = " | ";
  return (
    <div>
      <Link to='/'>home</Link><span>{divider}</span>
      <Link to='/about'>about</Link><span>{divider}</span>
      <Link to='/project'>project</Link><span>{divider}</span>
      <Link to='/blog'>blog</Link><span>{divider}</span>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </>
  );
}

export default App;
