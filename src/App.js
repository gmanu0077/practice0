import React from 'react';
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FBlog from './components/fullblog';
import Blog from './components/allblogs';
import EBlog from './components/editblog';
function App() {
  return (
    <Router> 
      
 
      
      <Route exact path="/"  component={Blog} />
      <Route exact path="/blog" component={FBlog} />
      <Route exact path="/editblog" component={EBlog} />
      
      
    </Router>
  );
}

export default App;